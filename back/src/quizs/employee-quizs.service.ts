import { Injectable } from '@nestjs/common';
import { CreateEmployeeQuizDto } from '../quizs/dto/create-employee-quiz.dto';
import { UpdateEmployeeQuizDto } from './dto/update-employee-quiz.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeQuizsService {
  constructor(private readonly prisma:PrismaService){}
  async create(createEmployeeQuizDto: CreateEmployeeQuizDto) {
    return await this.prisma.employeeQuiz.create({
      data:createEmployeeQuizDto
    }); 
  }

  async findAll() {
    return await this.prisma.employeeQuiz.findMany({
      include:{quiz:true,employee:true}
    });
  }

  async findAllByEmployee(id: string) {
    return await this.prisma.employeeQuiz.findMany({
      where:{
        employeeId:id,
      },
      include:{quiz:true}
    })
  }

  async findOne(quizId:string,employeeId:string) {
    return this.prisma.employeeQuiz.findFirst({
      where:{quizId,employeeId}
    });
  }

  async update(quizId:string,employeeId:string, updateEmployeeQuizDto: UpdateEmployeeQuizDto) {
    return await this.prisma.employeeQuiz.updateMany({
      where:{quizId,employeeId},
      data:updateEmployeeQuizDto
    });
  }

  async remove(quizId:string,employeeId:string) {
    return await this.prisma.employeeQuiz.deleteMany({
      where:{quizId,employeeId}
    });
  }
}

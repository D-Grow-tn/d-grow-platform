import { Injectable } from '@nestjs/common';
import { CreateEmployeeTestDto } from './dto/create-employee-test.dto';
import { UpdateEmployeeTestDto } from './dto/update-employee-test.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeTestsService {
  constructor(private readonly prisma:PrismaService){}
  async create(createEmployeeTestDto: CreateEmployeeTestDto) {
    return await this.prisma.employeeTest.create({
      data:createEmployeeTestDto,
    }); 
  }

  async findAll() {
    return await this.prisma.employeeTest.findMany({
      include:{test:true,employee:true}
    });
  }

  async findAllByEmployee(id: string) {
    return await this.prisma.employeeTest.findMany({
      where:{
        employeeId:id,
      },
      include:{test:true}
    })
  }
  async findOne(testId:string,employeeId:string) {
    return await this.prisma.employeeTest.findFirst({
      where:{testId,employeeId}
    });
  }

  async update(testId:string,employeeId:string, updateEmployeeTestDto: UpdateEmployeeTestDto) {
    return await this.prisma.employeeTest.updateMany({
      where:{testId,employeeId},
      data:updateEmployeeTestDto
    });
  }

 async remove(testId:string,employeeId:string) {
    return await this.prisma.employeeTest.deleteMany({
      where:{testId,employeeId}
    });
  }
}

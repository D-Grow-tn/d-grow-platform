import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { async } from 'rxjs';

@Injectable()
export class QuizsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateQuizDto) {
    const { EmployeeQuizIds, score, ...rest } = data;
    const employeeQuizData = EmployeeQuizIds.map((employeeId) => ({
      employee: { connect: { id: employeeId } },
      score: score,
    }));
    return await this.prisma.quiz.create({
      data: {
        ...rest,
        score,
        EmployeeQuiz: {
          create: employeeQuizData,
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.quiz.findMany({
      include: { EmployeeQuiz: { include: { employee: true } } },
    });
  }

  async findOne(id: string, prisma: Prisma.TransactionClient = this.prisma) {
    return await this.prisma.quiz.findFirst({
      where: { id },
      include: { EmployeeQuiz: { include: { employee: true } } },
    });
  }

  async update(id: string, updateQuizDto: UpdateQuizDto) {
    const { EmployeeQuizIds, score, ...rest } = updateQuizDto;
    return await this.prisma.$transaction(async (prisma) => {
      const quiz = await this.findOne(id, prisma);
      console.log(EmployeeQuizIds);
      console.log(quiz, '<<<<<<<<');
      // console.log(prisma.quiz,"prisma================");
      quiz.EmployeeQuiz.forEach(async (empl) => {
        if (!EmployeeQuizIds.includes(empl.employeeId)) {
          await prisma.employeeQuiz.delete({
            where: {
              employeeQuiz:{employeeId:empl.employeeId , quizId:id}
            },
          });
        }
      });
      return await this.prisma.quiz.update({
        where:{id},
        data:{
          ...rest,
          EmployeeQuiz:{
            connectOrCreate : EmployeeQuizIds.map((empl)=>({
              
              create:{employeeId:empl,   score: score },
              where:{employeeQuiz:{employeeId:empl,quizId:id}},
            }))
          }
        }
      })
    });
  }

  async remove(id: string) {
    return await this.prisma.$transaction(async (prisma) => {
      const quiz = await this.findOne(id, prisma);
      console.log(quiz);
  
      // Use Promise.all to ensure all deletion promises complete before proceeding
      await Promise.all(
        quiz.EmployeeQuiz.map(async (elem) => {
          await prisma.employeeQuiz.deleteMany({
            where: {
              quizId: id,
              employeeId: elem?.employee?.id,
            },
          });
        })
      );
  
      // Delete the quiz after all related EmployeeQuiz records are deleted
      return await prisma.quiz.delete({
        where: { id },
      });
    });
  }
  
}

import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class QuizsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateQuizDto) {
    const { EmployeeQuizIds, QuestionQuizIds, score, ...rest } = data;

    return await this.prisma.quiz.create({
      data: {
        ...rest,
        score,
        EmployeeQuiz: {
          create: EmployeeQuizIds.map((employeeId) => {
            return {
              employee: { connect: { id: employeeId } },
              score: score,
            };
          }),
        },
        QuestionQuiz: {
          create: QuestionQuizIds.map((questionId) => {
            return {
              question: { connect: { id: questionId } },
              score: score,
            };
          }),
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.quiz.findMany({
      include: { EmployeeQuiz: { include: { employee: true } },QuestionQuiz:{include:{question:{include:{OptionQuestion:{include:{option:true}}}}}} },
    });
  }

  async findOne(id: string, prisma: Prisma.TransactionClient = this.prisma) {
    return await this.prisma.quiz.findFirst({
      where: { id },
      include: {
        EmployeeQuiz: { include: { employee: true } },
        QuestionQuiz: { include: { question: true } },
      },
    });
  }

  async update(id: string, updateQuizDto: UpdateQuizDto) {
    const { EmployeeQuizIds, QuestionQuizIds, score, ...rest } = updateQuizDto;
    return await this.prisma.$transaction(async (prisma) => {
      const quiz = await this.findOne(id, prisma);
      console.log(EmployeeQuizIds);
      console.log(quiz, '<<<<<<<<');
      // console.log(prisma.quiz,"prisma================");
      quiz.EmployeeQuiz.forEach(async (empl) => {
        if (!EmployeeQuizIds.includes(empl.employeeId)) {
          await prisma.employeeQuiz.delete({
            where: {
              employeeQuiz: { employeeId: empl.employeeId, quizId: id },
            },
          });
        }
      });
      quiz.QuestionQuiz.forEach(async (elem) => {
        if (!QuestionQuizIds.includes(elem.questionId)) {
          await prisma.questionQuiz.delete({
            where: {
              questionQuiz: { questionId: elem.questionId, quizId: id },
            },
          });
        }
      });

      return await this.prisma.quiz.update({
        where: { id },
        data: {
          ...rest,
          EmployeeQuiz: {
            connectOrCreate: EmployeeQuizIds.map((empl) => ({
              create: { employeeId: empl, score: score },
              where: { employeeQuiz: { employeeId: empl, quizId: id } },
            })),
          },
        },
      });
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
        }),
      );
      await Promise.all(
        quiz.QuestionQuiz.map(async (elem) => {
          await prisma.questionQuiz.deleteMany({
            where: {
              quizId: id,
              questionId: elem?.question?.id,
            },
          });
        }),
      );

      // Delete the quiz after all related EmployeeQuiz records are deleted
      return await prisma.quiz.delete({
        where: { id },
      });
    });
  }
}
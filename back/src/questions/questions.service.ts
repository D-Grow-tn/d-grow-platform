import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateQuestionDto) {
    const { OptionQuestionIds, ...rest } = data;

    return await this.prisma.question.create({
      data: {
        ...rest,

        OptionQuestion: {
          create: OptionQuestionIds.map((optionId) => {
            return {
              option: { connect: { id: optionId } },
            };
          }),
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.question.findMany({
      include: { OptionQuestion: { include: { option: true } } },
    });
  }

  async findOne(id: string, prisma: Prisma.TransactionClient = this.prisma) {
    return await this.prisma.question.findFirst({
      where: { id },
      include: { OptionQuestion: { include: { option: true } } },
    });
  }

  async update(id: string, data: UpdateQuestionDto) {
    const { OptionQuestionIds, ...rest } = data;
    return await this.prisma.$transaction(async (prisma) => {
      const question = await this.findOne(id, prisma);

      question.OptionQuestion.forEach(async (op) => {
        if (!OptionQuestionIds.includes(op.optionId)) {
          await prisma.optionQuestion.delete({
            where: {
              optionQuestion: { optionId: op.optionId, questionId: id },
            },
          });
        }
      });

      return await this.prisma.question.update({
        where: { id },
        data: {
          ...rest,
          OptionQuestion: {
            connectOrCreate: OptionQuestionIds.map((op) => ({
              create: { optionId: op },
              where: { optionQuestion: { optionId: op, questionId: id } },
            })),
          },
        },
      });
    });
  }

  async remove(id: string) {
    return await this.prisma.$transaction(async (prisma) => {
      const question = await this.findOne(id, prisma);

      await Promise.all(
        question.OptionQuestion.map(async (elem) => {
          await prisma.optionQuestion.deleteMany({
            where: {
              questionId: id,
              optionId: elem?.option?.id,
            },
          });
        }),
      );

      return await prisma.question.delete({
        where: { id },
      });
    });
  }
}

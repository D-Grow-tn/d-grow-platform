import { Injectable } from '@nestjs/common';
import { CreateDecisionDto } from './dto/create-decision.dto';
import { UpdateDecisionDto } from './dto/update-decision.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DecisionsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createDecisionDto: CreateDecisionDto) {
    const { decisionApplyIds, ...rest } = createDecisionDto;
    return await this.prisma.decision.create({
      data: {
        ...rest,
        DecisionApply: {
          create: decisionApplyIds.map((id) => {
            return {
              employeeId: id,
            };
          }),
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.decision.findMany({
      include: {
        DecisionApply: {
          include: { employee: true },
        },
      },
    });
  }

  async findOne(id: string, prisma: Prisma.TransactionClient = this.prisma) {
    return await this.prisma.decision.findFirst({
      where: {
        id,
      },
      include: {
        DecisionApply: true,
      },
    });
  }

  async update(id: string, updateDecisionDto: UpdateDecisionDto) {
    const { decisionApplyIds, ...rest } = updateDecisionDto;
    return await this.prisma.$transaction(async (prisma) => {
      const decision = await this.findOne(id, prisma);
      decision.DecisionApply.forEach(async (member) => {
        if (!decisionApplyIds.includes(member.employeeId)) {
          await prisma.decisionApply.delete({
            where: {
              decisionApply: { employeeId: member.employeeId, decisionId: id },
            },
          });
        }
      });
      return await this.prisma.decision.update({
        where: { id },
        data: {
          ...rest,
          DecisionApply: {
            connectOrCreate: decisionApplyIds.map((member) => ({
              create: { employeeId: member },
              where: { decisionApply: { employeeId: member, decisionId: id } },
            })),
          },
        },
      });
    });
  }

  async remove(id: string) {
    return await this.prisma.$transaction(async (prisma) => {
      await prisma.decisionApply.deleteMany({
        where: {
          decisionId: id,
        },
      });
      return await prisma.decision.delete({
        where: {
          id,
        },
      });
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTestisDto } from './dto/create-testis.dto';
import { UpdateTestisDto } from './dto/update-testis.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TestesService {
  constructor(private readonly prisma: PrismaService) {}

 async create(data: CreateTestisDto) {
  const {EmployeeTestIds, QuestionnTestIds, score, ...rest } = data;
    return await this.prisma.test.create({
      data: {
        ...rest,
        score,
        employeeTest : {
          create: EmployeeTestIds.map((employeeId)=>{
            return {
              employee: { connect:{id: employeeId}},
              score:score,
            };
          }),
        },
        QuestionnTest: {
          create: QuestionnTestIds.map((questionnId) => {
            return {
              questionn: { connect: { id: questionnId } },
              score: score,
            };
          }),
        },

      },
    });
  }

 async findAll() {
    return await this.prisma.test.findMany({
      include:  {employeeTest:{include:{employee:true}},QuestionnTest:{include:{questionn:{include:{QuestionnAnswer:{include:{answer:true}}}}}}
  }
 });
  }

  async findOne(id: string, prisma:Prisma.TransactionClient = this.prisma) {
    return await this.prisma.test.findFirst({
      where: {id},
      include:{
        employeeTest:{include:{employee:true}},
        QuestionnTest:{include:{questionn:{include:{QuestionnAnswer:{include:{answer:true}}}}}
      }
    }
    });
  }

  async update(id: string, updateTestisDto: UpdateTestisDto) {
    const { EmployeeTestIds, QuestionnTestIds, score, ...rest } = updateTestisDto;
    return await this.prisma.$transaction(async (prisma) => {
      const test = await this.findOne(id, prisma);


      test.employeeTest.forEach(async (empl) => {
        if (!EmployeeTestIds.includes(empl.employeeId)) {
          await prisma.employeeTest.delete({
            where: {
              employeeTest:{ employeeId: empl.employeeId, testId: id },
            },
          });
        }
      });
      test.QuestionnTest.forEach(async (elem) => {
        if (!QuestionnTestIds.includes(elem.questionnId)) {
          await prisma.questionnTest.delete({
            where: {
              questionnTest:{ questionnId: elem.questionnId, testId: id },
            },
          });
        }
      });

      return await this.prisma.test.update({
        where: { id },
        data: {
          ...rest,
          employeeTest: {
            connectOrCreate: EmployeeTestIds.map((empl) => ({
              create: { employeeId: empl, score: score },
              where: { employeeTest: { employeeId: empl, testId: id } },
            })),
          },
        },
      });
    });
  }

  async remove(id: string) {
    return await this.prisma.$transaction(async (prisma) => {
      const test = await this.findOne(id, prisma);
      console.log(test);

      await Promise.all(
        test.employeeTest.map(async (elem) => {
          await prisma.employeeTest.deleteMany({
            where: {
              testId: id,
              employeeId: elem?.employee?.id,
            },
          });
        }),
      );
      await Promise.all(
        test.QuestionnTest.map(async (elem) => {
          await prisma.questionnTest.deleteMany({
            where: {
              testId: id,
              questionnId: elem?.questionn?.id,
            },
          });
        }),
      );

      // Delete the quiz after all related EmployeeQuiz records are deleted
      return await prisma.test.delete({
        where: { id },
      });
    });
  }
}

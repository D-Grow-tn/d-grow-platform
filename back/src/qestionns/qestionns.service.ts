import { Injectable } from '@nestjs/common';
import { CreateQestionnDto } from './dto/create-qestionn.dto';
import { UpdateQestionnDto } from './dto/update-qestionn.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';
@Injectable()
export class QestionnsService {
  constructor(private readonly prisma: PrismaService) {}
 async create(data: CreateQestionnDto) {
    const {QuestionnAnswerIds, ...rest} = data
    return await this.prisma.questionn.create({
     data :{
      ...rest ,
      QuestionnAnswer:{
        create: QuestionnAnswerIds.map((answerId)=>{
          return {
            answer: {connect: {id: answerId } },
          }
        })
      }
    },
    
    });
  }

 async findAll() {
    return await this.prisma.questionn.findMany({
      include :{ QuestionnAnswer: { include:{answer:true}}},
    });
  }

 async  findOne(id: string, prisma: Prisma.TransactionClient = this.prisma) {
    return await this.prisma.questionn.findFirst({
      where: { id},
      include: { QuestionnAnswer: { include: { answer: true } } },
    });
  }

 async update(id: string, data: UpdateQestionnDto) {
    const { QuestionnAnswerIds, ...rest} =data
    return await this.prisma.$transaction(async (prisma) => {
      const questionn = await this.findOne(id,prisma);
      questionn.QuestionnAnswer.forEach(async (answer) => {
        if (!QuestionnAnswerIds.includes(answer.answerId)){
          await prisma.questionnAnswer.delete({
            where:{
              questionnAnswer: {answerId:answer.answerId,questionnId:id},
         } })
        }
      })
      return await this.prisma.questionn.update({
        where: { id },
        data:{
          ...rest ,         
          QuestionnAnswer:{
            connectOrCreate: QuestionnAnswerIds.map((answer)=>({
              create:{answerId: answer},
              where:{questionnAnswer:{answerId:answer,questionnId:id}},
            })),
        },
      },
      });
    });
  }

 async remove(id: string) {
    return await this.prisma.$transaction(async (prisma) => {
      const questionn = await this.findOne(id,prisma );

   await Promise.all(
    questionn.QuestionnAnswer.map(async (elem)=>{
      await prisma.questionnAnswer.deleteMany({
        where:{
          questionnId:id,
          answerId:elem?.answer?.id,
          },
        });
      }),
      );
      return await prisma.questionn.delete({where :{id}});
    }
   )
  }
}

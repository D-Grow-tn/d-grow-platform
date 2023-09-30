import { Injectable } from '@nestjs/common';
import { CreateQestionnDto } from './dto/create-qestionn.dto';
import { UpdateQestionnDto } from './dto/update-qestionn.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';
@Injectable()
export class QestionnsService {
  constructor(private readonly prisma: PrismaService) {}
 async create(data: CreateQestionnDto) {
    const {AnswerQuestionnIds, ...rest} = data
    return await this.prisma.questionn.create({
     data :{
      ...rest ,
      AnswerQuestionn:{
        create: AnswerQuestionnIds.map((answerId)=>{
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
      include :{ AnswerQuestionn: { include:{answer:true}}},
    });
  }

 async  findOne(id: string, prisma: Prisma.TransactionClient = this.prisma) {
    return await this.prisma.questionn.findFirst({
      where: { id},
      include: { AnswerQuestionn: { include: { answer: true } } },
    });
  }

 async update(id: string, data: UpdateQestionnDto) {
    const { AnswerQuestionnIds, ...rest} =data
    return await this.prisma.$transaction(async (prisma) => {
      const questionn = await this.findOne(id,prisma);
      questionn.AnswerQuestionn.forEach(async (answer) => {
        if (!AnswerQuestionnIds.includes(answer.answerId)){
          await prisma.answerQuestionn.delete({
            where:{
              AnswerQuestionn: {answerId:answer.answerId,questionnId:id},
         } })
        }
      })
      return await this.prisma.questionn.update({
        where: { id },
        data:{
          ...rest ,         
           AnswerQuestionn:{
            connectOrCreate:AnswerQuestionnIds.map((answer)=>({
              create:{answerId: answer},
              where:{AnswerQuestionn:{answerId:answer,questionnId:id}},
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
    questionn.AnswerQuestionn.map(async (elem)=>{
      await prisma.answerQuestionn.deleteMany({
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

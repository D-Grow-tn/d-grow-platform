import { Injectable } from '@nestjs/common';
import { CreateAnswerQuestionnDto } from './dto/create-answer-questionn.dto';
import { UpdateAnswerQuestionnDto } from './dto/update-answer-questionn.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswerQuestionnsService {
  constructor(private readonly prisma:PrismaService){}
 async create(data: CreateAnswerQuestionnDto) {
    return await this.prisma.answerQuestionn.create({
      data,
    });
  }

 async findAll() {
    return await this.prisma.answerQuestionn.findMany({});
  }

  async findAllByAnswer(id: string) {
    return await this.prisma.answerQuestionn.findMany({
      where:{
        answerId:id,
      },
      include:{questionn:true}
    })
  }

 async findOne(questionnId:string,answerId:string) {
    return await this.prisma.answerQuestionn.findFirst({
      where:{questionnId,answerId}
    });
  }

  async update(questionnId:string,answerId:string, updateAnswerQuestionnDto: UpdateAnswerQuestionnDto) {
    return await this.prisma.answerQuestionn.updateMany({
      where :{ questionnId , answerId},
      data  : updateAnswerQuestionnDto ,
    });
  }

 async remove(questionnId:string,answerId:string) {
    return await this.prisma.answerQuestionn.deleteMany({
      where:{questionnId,answerId},
    });
  }
}

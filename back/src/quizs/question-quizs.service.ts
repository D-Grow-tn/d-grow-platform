import { Injectable } from '@nestjs/common';
import { CreateQuestionQuizDto } from './dto/create-question-quiz.dto';
import { UpdateQuestionQuizDto } from './dto/update-question-quiz.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionQuizsService {
  constructor(private readonly prisma :PrismaService){}
 async create(createQuestionQuizDto: CreateQuestionQuizDto) {
    return await this.prisma.questionQuiz.create({
      data:createQuestionQuizDto
    })
  }

  async findAll() {
    return await this.prisma.questionQuiz.findMany({
      include:{quiz:true,question:true}
    });
  }

 async  findAllByQuestion(id: string) {
    return await this.prisma.questionQuiz.findMany({
      where:{questionId:id,
    },
    include:{quiz:true}
  })
 }

 async findOne(quizId:string,questionId:string) {
  return await this.prisma.questionQuiz.findFirst({
    where:{quizId,questionId}
  });
}

 async update(quizId: string, questionId:string,updateQuestionQuizDto: UpdateQuestionQuizDto) {
    return await this.prisma.questionQuiz.updateMany({
      where:{quizId,questionId},data:updateQuestionQuizDto})
  }

 async remove(quizId:string,questionId:string) {
    return await this.prisma.questionQuiz.deleteMany({
      where:{quizId,questionId}
    })
   
  }
}

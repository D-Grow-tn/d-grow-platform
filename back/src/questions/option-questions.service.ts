import { Injectable } from '@nestjs/common';
import { CreateOptionquestionDto } from './dto/create-optionquestion.dto';
import { UpdateOptionquestionDto } from './dto/update-optionquestion.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OptionquestionsService {
  constructor(private readonly prisma:PrismaService){}
 async create(data: CreateOptionquestionDto) {
    return await this.prisma.optionQuestion.create({
      data,
    });
  }

 async findAll() {
    return await this.prisma.optionQuestion.findMany({});
  }

  async findAllByOption(id: string) {
    return await this.prisma.optionQuestion.findMany({
      where:{
        optionId:id,
      },
      include:{question:true}
    })
  }
  async findOne(questionId:string,optionId:string) {
    return await this.prisma.optionQuestion.findFirst({
      where:{questionId,optionId}
    });
  }
  

 async update(questionId:string,optionId:string, updateOptionquestionDto: UpdateOptionquestionDto) {
    return await this.prisma.optionQuestion.updateMany({
      where:{questionId,optionId},
      data :updateOptionquestionDto
    });
     
  }

 async remove(questionId:string,optionId:string) {
    return await this.prisma.optionQuestion.deleteMany({
   where:{questionId,optionId}
    });
  }
}

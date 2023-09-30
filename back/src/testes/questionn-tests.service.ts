import { Injectable } from '@nestjs/common';
import { CreateQuestionnTestDto } from './dto/create-questionn-test.dto';
import { UpdateQuestionnTestDto } from './dto/update-questionn-test.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuestionnTestsService {
  constructor(private readonly prisma:PrismaService){}
  async create(createQuestionnTestDto: CreateQuestionnTestDto) {
    return await this.prisma.questionnTest.create({
      data:createQuestionnTestDto
    })
  }
  async findAll() {
    return await this.prisma.questionnTest.findMany({
      include:{test:true,questionn:true}
    });
  }

  async  findAllByQuestionn(id: string) {
    return await this.prisma.questionnTest.findMany({
      where:{questionnId:id,
    },
    include:{test:true}
  })
 }

  async findOne(testId:string,questionnId:string) {
    return await this.prisma.questionnTest.findFirst({
      where:{testId,questionnId}
    });
  }
  async update(testId: string, questionnId:string,updateQuestionnTestDto: UpdateQuestionnTestDto) {
    return await this.prisma.questionnTest.updateMany({
      where:{testId,questionnId},data:updateQuestionnTestDto})
  }

  async remove(testId:string,questionnId:string) {
    return await this.prisma.questionnTest.deleteMany({
      where:{testId,questionnId}
    })
   
  }
}

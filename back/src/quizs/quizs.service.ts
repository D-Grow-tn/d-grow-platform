import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class QuizsService {
  constructor(private readonly prisma:PrismaService) {}
 async create(data: CreateQuizDto) {
    return await this.prisma.quiz.create({
      data,
    });
  }

 async findAll() {
    return await this.prisma.quiz.findMany({
      include:{employeeQuiz:{include:{employee:true}}}
    });
  }

async  findOne(id: string) {
    return await this.prisma.quiz.findFirst({
      where:{id}
    });
  }

  async update(id: string, updateQuizDto: UpdateQuizDto) {
    return await this.prisma.quiz.update({
      where:{id,},
      data:updateQuizDto,
    });
  }

 async remove(id: string) {
    return await this.prisma.quiz.delete({
      where:{id,}
    });
  }
}

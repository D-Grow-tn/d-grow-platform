import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnswersService {
  constructor(private readonly prisma:PrismaService){}
 async create(data: CreateAnswerDto) {
    return await this.prisma.answer.create({
      data,
    });
  }

 async findAll() {
    return await this.prisma.answer.findMany({

    });
  }

 async findOne(id: string) {
    return await this.prisma.answer.findFirst({
      where:{id,}
    });
  }

 async update(id: string, data: UpdateAnswerDto) {
    return await this.prisma.answer.update({
      where:{id},
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.answer.delete({
      where:{ id },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateParagraphDto } from './dto/create-paragraph.dto';
import { UpdateParagraphDto } from './dto/update-paragraph.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParagraphsService {
  constructor(private readonly prisma:PrismaService){}
 async create(createParagraphDto: CreateParagraphDto) {
    return await this.prisma.paragraph.create({
      data:createParagraphDto,
    });
  }

 async findAll() {
    return await this.prisma.paragraph.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.paragraph.findFirst({
      where:{id,}
    });
  }

 async  update(id:string, updateParagraphDto: UpdateParagraphDto) {
    return await this.prisma.paragraph.update({
      where:{id},
      data:updateParagraphDto,
    });
  }

  async remove(id:string) {
    return await this.prisma.paragraph.delete({
      where:{id},
    });
  }
}

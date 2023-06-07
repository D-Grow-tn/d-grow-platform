import { Injectable } from '@nestjs/common';
import { CreateContentPageDto } from './dto/create-content-page.dto';
import { UpdateContentPageDto } from './dto/update-content-page.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentPagesService {
  constructor(private readonly prisma:PrismaService) {}
 async create(createContentPageDto: CreateContentPageDto) {
    return await this.prisma.contentPage.create({
      data:createContentPageDto,
    });
  }

 async findAll() {
    return await this.prisma.contentPage.findMany({

    });
  }

  async findOne(id: string) {
    return await this.prisma.contentPage.findFirst({
      where:{
        id,
      }
    });
  }

 async update(id: string, updateContentPageDto: UpdateContentPageDto) {
    return await this.prisma.contentPage.update({
      where:{id},
      data:updateContentPageDto
    });
  }

 async remove(id:string) {
    return this.prisma.contentPage.delete({
      where:{id}
    });
  }
}

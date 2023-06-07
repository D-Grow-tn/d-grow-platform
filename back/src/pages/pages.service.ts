import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PagesService {
  constructor(private readonly prisma:PrismaService){}
 async create(createPageDto: CreatePageDto) {
    return  await this.prisma.page.create({
      data: createPageDto,
  })}


  
  

 async findAll() {
    return await this.prisma.page.findMany({
      include: {content:{include:{sectionContentPage:{include:{section:{include:{paragraphs:true,buttons:true}}}}}}}
    });
  }

 async findOne(id: string) {
    return await this.prisma.page.findFirst({
      where: { id,
    }});
  }

 async update(id: string, updatePageDto: UpdatePageDto) {
    return this.prisma.page.update({
      where: { id },
      data: updatePageDto,
    });
  }

async remove(id: string) {
    return this.prisma.page.delete({
      where: { id },
    });
  }
}

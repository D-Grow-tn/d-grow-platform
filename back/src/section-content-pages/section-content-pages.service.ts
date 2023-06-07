import { Injectable } from '@nestjs/common';
import { CreateSectionContentPageDto } from './dto/create-section-content-page.dto';
import { UpdateSectionContentPageDto } from './dto/update-section-content-page.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SectionContentPagesService {
  constructor(private readonly prisma:PrismaService) {}
 async create(createSectionContentPageDto: CreateSectionContentPageDto) {
    return await this.prisma.sectionContentPage.create({
      data: createSectionContentPageDto,
    });
  }

async  findAll() {
    return await this.prisma.sectionContentPage.findMany({

    });
  }

  async findOne(sectionId:string , contentPageId:string) {
    return await this.prisma.sectionContentPage.findFirst({
      where: {sectionId,contentPageId}
    });
  }

  async update(sectionId:string , contentPageId:string , updateSectionContentPageDto: UpdateSectionContentPageDto) {
    return await this.prisma.sectionContentPage.updateMany({
      where: {sectionId,contentPageId},
      data:updateSectionContentPageDto
    })
  }

  async remove(sectionId:string , contentPageId:string) {
    return await this.prisma.sectionContentPage.deleteMany({
      where:{sectionId,contentPageId}
    })
  }
}

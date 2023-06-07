import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SectionsService {
  constructor(private readonly prisma:PrismaService){}
async create(createSectionDto: CreateSectionDto) {
  return await this.prisma.section.create({
    data: createSectionDto,
    });
    }



 


async findAll() {
    return await this.prisma.section.findMany({

    });
  }

  async findOne(id: string) {
    return await this.prisma.section.findFirst({
      where:{id},

    });
  
  
  }

 async  update(id: string, updateSectionDto: UpdateSectionDto) {
    return this.prisma.section.update({
      where:{id},
      data:updateSectionDto
    });
  }

 async remove(id: string) {
    return this.prisma.section.delete({
      where:{id}
    });
  }
}

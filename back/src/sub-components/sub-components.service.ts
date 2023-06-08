import { Injectable } from '@nestjs/common';
import { CreateSubComponentDto } from './dto/create-sub-component.dto';
import { UpdateSubComponentDto } from './dto/update-sub-component.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubComponentsService {
  constructor(private readonly prisma:PrismaService) {}
 async create(createSubComponentDto: CreateSubComponentDto) {
    return await this.prisma.subComponent.create({
      data:createSubComponentDto
    });
  }

  async findAll() {
    return await this.prisma.subComponent.findMany({
      include:{ContentSubComponent:true}
    });
  }

 async findOne(id: string) {
    return await this.prisma.subComponent.findFirst({
      where:{id}
    });
  }

  async update(id: string, updateSubComponentDto: UpdateSubComponentDto) {
    return await this.prisma.subComponent.update({
      where:{id},
      data:updateSubComponentDto
    });
  } 

 async  remove(id: string) {
    return await this.prisma.subComponent.delete({
      where:{id}
    });
  }
}

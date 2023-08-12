import { Injectable } from '@nestjs/common';
import { CreateMainComponentDto } from './dto/create-main-component.dto';
import { UpdateMainComponentDto } from './dto/update-main-component.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MainComponentsService {
  constructor(private readonly prisma:PrismaService){}
 async  create(createMainComponentDto: CreateMainComponentDto) {
    return await this.prisma.mainComponent.create({
      data:createMainComponentDto
    });
  }

 async findAll() {
    return await this.prisma.mainComponent.findMany({
      include:{SubComponent:{include:{ContentSubComponent:{include:{nexts:true}}}}}
    });
  }

 async findOne(id: string) {
    return await this.prisma.mainComponent.findFirst({
      where:{id,},
      include:{
        SubComponent:true
      }

    });
  }
 async findOneByTitle(title: string) {
    return await this.prisma.mainComponent.findFirst({
      where:{title},
      include:{SubComponent:{include:{ContentSubComponent:{include:{nexts:{include:{media:true}},media:true}}}}}

    });
  }

  async update(id: string, updateMainComponentDto: UpdateMainComponentDto) {
    return this.prisma.mainComponent.update({
      where:{id},
      data:updateMainComponentDto
    });
  }

  async remove(id: string) {
    return this.prisma.mainComponent.delete({
      where:{id}
    });
  }
}

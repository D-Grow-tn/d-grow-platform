import { Injectable } from '@nestjs/common';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TechnologiesService {
  constructor(private readonly prisma:PrismaService) {}
 async create(createTechnologyDto: CreateTechnologyDto) {
    return await this.prisma.technology.create({
      data: createTechnologyDto
    })
  }

 async findAll() {
    return await this.prisma.technology.findMany({});
  }

 async findOne(id:string) {
    return await this.prisma.technology.findFirst({
      where:{
        id,
      }
    });
  }

 async update(id:string, updateTechnologyDto: UpdateTechnologyDto) {
    return await this.prisma.technology.update({
      where:{id},
      data:updateTechnologyDto
    });
  }

 async remove(id:string) {
    return await this.prisma.technology.delete({
      where:{id,}
    });
  }
}

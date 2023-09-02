import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OptionsService {
  constructor(private readonly prisma:PrismaService){}
 async create(data: CreateOptionDto) {
    return await this.prisma.option.create({
      data,
    });
  }

 async findAll() {
    return await this.prisma.option.findMany();
  }

async findOne(id:string) {
    return await this.prisma.option.findFirst({
      where:{id,}
    });
  }

async  update(id: string, data: UpdateOptionDto) {
    return await this.prisma.option.update({
      where :{ id },
      data,
    }) ;
  }

 async remove(id: string) {
    return await this.prisma.option.delete({
      where:{id},
    });
  }
}

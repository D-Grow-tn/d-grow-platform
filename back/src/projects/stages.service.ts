import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StagesService {
constructor(private readonly prisma:PrismaService) {}
async  create(data: CreateStageDto) {
      return await this.prisma.stage.create({
        data,
      })
    }
  

  findAll() {
    return this.prisma.stage.findMany({});
  }

  findOne(id: string) {
    return this.prisma.stage.findUnique({where:{id}});
  }

  update(id: string, data: UpdateStageDto) {
    return this.prisma.stage.update({
      data,
      where:{id}
    });
  }

  remove(id: string) {
    return this.prisma.stage.delete({where:{id}});
  }
}

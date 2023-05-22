import { Injectable } from '@nestjs/common';
import { UpdateSubObjectiveDto } from './dto/update-sub-objective.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubObjectiveDto } from './dto/create-sub-objective.dto';

@Injectable()
export class SubObjectivesService {
  constructor(private readonly prisma:PrismaService) {}
 async create(data: CreateSubObjectiveDto) {
    return await this.prisma.subobjective.create({data});
  }

  findAll() {
    return this.prisma.subobjective.findMany({});
  }

  findOne(id: string) {
    return this.prisma.subobjective.findUnique({where:{id}});
  }

  update(id: string, data: UpdateSubObjectiveDto) {
    return this.prisma.subobjective.update({
      data,
      where:{id}
    });
  }

  remove(id: string) {
    return this.prisma.subobjective.delete({where:{id}});
  }
}

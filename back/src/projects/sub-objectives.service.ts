import { Injectable } from '@nestjs/common';
import { UpdateSubObjectiveDto } from './dto/update-sub-objective.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubObjectiveDto } from './dto/create-sub-objective.dto';

@Injectable()
export class SubObjectivesService {
  constructor(private readonly prisma:PrismaService) {}
 async create(data: CreateSubObjectiveDto) {
    return await this.prisma.subObjective.create({data});
  }

  findAll() {
    return this.prisma.subObjective.findMany({});
  }

  findOne(id: string) {
    return this.prisma.subObjective.findUnique({where:{id}});
  }

  update(id: string, data: UpdateSubObjectiveDto) {
    return this.prisma.subObjective.update({
      data,
      where:{id}
    });
  }

  remove(id: string) {
    return this.prisma.subObjective.delete({where:{id}});
  }
}

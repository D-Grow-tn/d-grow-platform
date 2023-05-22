import { Injectable } from '@nestjs/common';
import { CreateObjectiveDto } from './dto/create-objective.dto';
import { UpdateObjectiveDto } from './dto/update-objective.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ObjectivesService {
  constructor(private readonly prisma:PrismaService) {}
async create(data: CreateObjectiveDto) {
    return await this.prisma.objective.create({data})
   }

  findAll() {
    return this.prisma.objective.findMany({});
  }

  findOne(id: string) {
 return this.prisma.objective.findUnique({where:{id}});
  }

  update(id: string, data: UpdateObjectiveDto) {
    return this.prisma.objective.update({
      data,
      where:{id}
    });
  }

  remove(id: string) {
    return this.prisma.subobjective.delete({where:{id}});
  }
}

import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateProjectDto) {
    return this.prisma.project.create({ data });
  }

  findAll() {
    return this.prisma.project.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.project.findUnique({
      where: { id },
      include: {
        objective: { include: { subobjective: true,Stage:true } },
        projectManager: true,
        consultant: true,
   interaction:true
      },
    });
  }

  async findAllByClient(clientId: string) {
    return await this.prisma.project.findMany({
      where: { clientId },
    });
  }

  update(id: string, data: UpdateProjectDto) {
    return this.prisma.project.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.project.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma:PrismaService) {}
 async create(createTaskDto: CreateTaskDto) {
    return await this.prisma.task.create({
      data: createTaskDto,
    });
  }

  async findAll() {
    return await this.prisma.task.findMany({
      include : {employee:true}
    }) ;
  }

  async findOne(id: string) {
    return await this.prisma.task.findFirst({
      where:{id,}
    });
  }

 async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await this.prisma.task.update({
      where:{id,},
      data:updateTaskDto
    });
  }

 async remove(id: string) {
    return await this.prisma.task.delete({
      where:{id,}
    });
  }
}

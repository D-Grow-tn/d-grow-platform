import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma:PrismaService) {}
 async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.prisma.department.create({
      data:createDepartmentDto,
    })
  }

 async findAll() {
    return await this.prisma.department.findMany({});
  }

 async findOne(id: string) {
  return await this.prisma.department.findFirst({
    where:{id}
  })
  }

async  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return await this.prisma.department.update({
      where:{id,},
      data:updateDepartmentDto,
    });
  }

async  remove(id: string) {
  return await this.prisma.department.delete({
    where:{id,}
  });
  }
}

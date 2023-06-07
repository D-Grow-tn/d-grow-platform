import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'src/prisma/prisma.service';




@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    return await  this.prisma.employee.create({
      data:createEmployeeDto,
    });
  }

  async findAll() {
    return await this.prisma.employee.findMany({
      include: {employeeTest:true,teamMembership:{include:{team:true}},EmployeeChatRoom:{include:{chatRoom:true}},EmployeeQuiz:{include:{quiz:true}}}
    })
  }

  async findOne(id: string) {
    return await this.prisma.employee.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return await 
    this.prisma.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.employee.delete({ where: { id } });

  }
}

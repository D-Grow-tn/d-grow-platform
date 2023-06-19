import { Injectable } from '@nestjs/common';
import { CreateEmployeeTestDto } from '../dto/create-employee-test.dto';
import { UpdateEmployeeTestDto } from '../dto/update-employee-test.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeTestsService {
  constructor(private readonly prisma:PrismaService){}
  async create(createEmployeeTestDto: CreateEmployeeTestDto) {
    return this.prisma.employeeTest.create({
      data: createEmployeeTestDto,
    });
  }

 async findAll() {
    return await this.prisma.employeeTest.findMany({
      include:{test:true,employee:true}
    });
  }

 async  findManybyEmployeeId(employeeId: string) {
    return this.prisma.employeeTest.findMany({
      where:{
        employeeId
      },
      include:{test:true}
    });
  }

  async findOne(testId: string,employeeId: string) {
    return await this.prisma.employeeTest.findFirst({
      where:{testId,employeeId}
    })
  }

 async  update(employeeId:string,testId:string, updateEmployeeTestDto: UpdateEmployeeTestDto) {
    return  await this.prisma.employeeTest.updateMany({
      where:{employeeId,testId},
      data: updateEmployeeTestDto,
    });
  }

  remove(testId: string,employeeId:string) {
    return this.prisma.employeeTest.deleteMany({
      where:{testId,employeeId},
    });
  }
}

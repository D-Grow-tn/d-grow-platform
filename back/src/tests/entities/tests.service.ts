import { Injectable } from '@nestjs/common';
import { CreateTestDto } from '../dto/create-test.dto';
import { UpdateTestDto } from '../dto/update-test.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestsService {
  constructor(private readonly prisma:PrismaService) {}
async  create(data: CreateTestDto) {
    return await this.prisma.test.create({
      data,
    });
  }

 async findAll() {
    return await this.prisma.test.findMany({
      include: {employeeTest:{include:{employee:true}}}
    });
  }

 async findOne(id: string) {
    return await this.prisma.test.findFirst({
      where:{id,}
    });
  }

 async update(id: string, data: UpdateTestDto) {
    return await this.prisma.test.update({
      where:{id},
      data,
    });
  }

 async remove(id: string) {
    return await this.prisma.test.delete({
      where:{id,}
    });
  }
}
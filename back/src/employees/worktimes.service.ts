import { Injectable } from '@nestjs/common';
import { CreateWorktimeDto } from './dto/create-worktime.dto';
import { UpdateWorktimeDto } from './dto/update-worktime.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorktimesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createWorktimeDto: CreateWorktimeDto) {
    return await this.prisma.dailyWorkTime.create({
      data: createWorktimeDto,
    })
  }

  async findAll() {
    return  await this.prisma.dailyWorkTime.findMany({
      include:{employee:true}

    })
  }

  async findOnebyEmployee(employeeId: string) {
    return await this.prisma.dailyWorkTime.findFirst({
      where: {
    employeeId
      }  ,
      include:{employee:true}   
       })
  }
  async findAllbyDay(date: Date) {
    return await this.prisma.dailyWorkTime.findMany({
      where: {
        date
      }  ,
      include:{employee:true}   
       })
  }

  update(id: number, updateWorktimeDto: UpdateWorktimeDto) {
    return `This action updates a #${id} worktime`;
  }

  remove(id: number) {
    return `This action removes a #${id} worktime`;
  }
}

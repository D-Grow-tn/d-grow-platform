import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}
 async create(createEmployeeDto: CreateEventDto) {
    return await  this.prisma.event.create({
      data:createEmployeeDto,
    });
  }

  async findAll() {
    return await this.prisma.event.findMany({})
  }

 async  findOne(id: string) {
    return await this.prisma.event.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    return await 
    this.prisma.event.update({
      where: { id },
      data: updateEventDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.event.delete({ where: { id } });

  }
}

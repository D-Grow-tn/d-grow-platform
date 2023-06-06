import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createEventDto: CreateEventDto) {
    return await this.prisma.event.create({
      data: createEventDto,
    });
  }

  async findAll() {
    return await this.prisma.event.findMany({
      include: {
        Membership: true,
      },
    });
  }
  async findAllByEmployee(employeeId: string) {
    return await this.prisma.event.findMany({
      where: {
        employeeId,
      },
      include: {
        Membership: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.event.findFirst({
      where: {
        id,
      },
      include: {
        Membership: true,
      },
    });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    return await this.prisma.event.update({
      where: { id },
      data: updateEventDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.event.delete({ where: { id } });
  }
}

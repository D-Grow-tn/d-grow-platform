import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RequestsService {
  constructor(private readonly prisma: PrismaService) {}
 async create(createRequestDto: CreateRequestDto) {
  return await  this.prisma.request.create({
    data:createRequestDto,
  });
  }

async  findAll() {
    return await this.prisma.request.findMany({})
  }

  async  findOne(id: string) {
    return await this.prisma.request.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateRequestDto: UpdateRequestDto) {
    return await 
    this.prisma.request.update({
      where: { id },
      data: updateRequestDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.event.delete({ where: { id } });

  }
}

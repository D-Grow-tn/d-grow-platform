import { Injectable } from '@nestjs/common';
import { CreateProvideDto } from './dto/create-provide.dto';
import { UpdateProvideDto } from './dto/update-provide.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProvidesService {
  constructor(private readonly prisma: PrismaService) {}
 async create(createProvideDto: CreateProvideDto) {
    return await this.prisma.provides.create(
     { data:createProvideDto}
    );
  }

  async findAll() {
    return await this.prisma.provides.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.provides.findFirst({
      where: {
        id,
      },
    });
  }

 async update(id: string , updateProvideDto: UpdateProvideDto) {
    return await this.prisma.provides.update({
      where: {
        id,
      },
      data:updateProvideDto,
    });
  }

  remove(id: string) {
    return this.prisma.provides.delete({
      where: {
        id,
      },
    });
  }
}

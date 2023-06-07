import { Injectable } from '@nestjs/common';
import { CreateButtonDto } from './dto/create-button.dto';
import { UpdateButtonDto } from './dto/update-button.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ButtonsService {
  constructor(private readonly prisma:PrismaService) {}
 async create(createButtonDto: CreateButtonDto) {
    return await this.prisma.button.create({
      data:createButtonDto,
    });
  }

  async findAll() {
    return await this.prisma.button.findMany({});
  }

 async findOne(id: string) {
    return await this.prisma.button.findFirst({
      where:{id,}
    });
  }

 async update(id: string, updateButtonDto: UpdateButtonDto) {
    return await this.prisma.button.update({
      where:{id,},
      data:updateButtonDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.button.delete({
      where:{id,}
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateContentSubComponentDto } from './dto/create-content-sub-component.dto';
import { UpdateContentSubComponentDto } from './dto/update-content-sub-component.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentSubComponentsService {
  constructor(private readonly prisma :PrismaService) {}
  async create(createContentSubComponentDto: CreateContentSubComponentDto) {
    return await this.prisma.contentSubComponent.create({
      data:createContentSubComponentDto
    });
  }

  async findAll() {
    return await this.prisma.contentSubComponent.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.contentSubComponent.findFirst({
      where:{id}
    });
  }

 async update(id: string, updateContentSubComponentDto: UpdateContentSubComponentDto) {
    return await this.prisma.contentSubComponent.update({
      where:{id},
      data:updateContentSubComponentDto
    });
  }

  async remove(id: string) {
    return await this.prisma.contentSubComponent.delete({
      where:{id}
    });
  }
}

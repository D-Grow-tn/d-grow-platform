import { Injectable } from '@nestjs/common';
import { CreateContentSubComponentDto } from './dto/create-content-sub-component.dto';
import { UpdateContentSubComponentDto } from './dto/update-content-sub-component.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContentSubComponentsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateContentSubComponentDto) {
    const { previousContentSubComponent, ...rest } = dto;
    let data = { ...rest };

    return await this.prisma.contentSubComponent.create({
      data,
    });
  }

  async findAll(subComponentId: string) {
    return await this.prisma.contentSubComponent.findMany({
      where: {
        subComponentId,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.contentSubComponent.findFirst({
      where: { id },
    });
  }

  async update(id: string, dto: UpdateContentSubComponentDto) {
    const { previousContentSubComponent, ...rest } = dto;
    let data = { ...rest };
    return await this.prisma.contentSubComponent.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.contentSubComponent.delete({
      where: { id },
    });
  }
}

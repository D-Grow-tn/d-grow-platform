import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    try {
      const createItem = await this.prisma.item.create({
        data: createItemDto,
      });
      return createItem
    } catch (error) {
      throw new Error(`Error creating Item: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const allItem = await this.prisma.item.findMany();
      return allItem;
    } catch (error) {
      throw new Error(`Error creating Item: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      const findOneItem = await this.prisma.item.findFirst({
        where: { id },
      });
      return findOneItem;
    } catch (error) {
      throw new Error(`Error finding Item: ${error.message}`);
    }
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    try {
      const updateItem = await this.prisma.item.update({
        where: { id },
        data: updateItemDto,
      });
      return updateItem;
    } catch (error) {
      throw new Error(`Error updating Item: ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      const removeItem = await this.prisma.item.delete({
        where: { id },
      });
      return removeItem;
    } catch (error) {
      throw new Error(`Error removing Item: ${error.message}`);
    }
  }
}

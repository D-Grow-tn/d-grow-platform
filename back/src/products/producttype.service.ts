import { Injectable } from '@nestjs/common';
import { CreateProducttypeDto } from './dto/create-producttype.dto';
import { UpdateProducttypeDto } from './dto/update-producttype.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProducttypeService {
  constructor (private readonly prisma: PrismaService) {}
   async create(createProducttypeDto: CreateProducttypeDto) {
    return await this.prisma.productType.create({
       data: createProducttypeDto,
    });
  }

  async findAll() {
    return await this.prisma.productType.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.productType.findFirst({
      where: {
        id,
    },
    });
  }

 async update(id: string, updateProducttypeDto: UpdateProducttypeDto) {
    return await this.prisma.productType.update({ where: { id }, data: updateProducttypeDto });

  }

  async remove(id: string) {
    return await this.prisma.productType.delete({ where: { id } });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateProducttypeDto } from './dto/create-producttype.dto';
import { UpdateProducttypeDto } from './dto/update-producttype.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HelpersService } from '../helpers/helpers.service';
@Injectable()
export class ProducttypeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly helper: HelpersService,
  ) {}

   async create(createProducttypeDto: CreateProducttypeDto) {
    const { mediaIds, ...rest } = createProducttypeDto;
    let data = rest;
    let product= await this.helper.notFound('product', 'findUniqueOrThrow', {
      where: { id: data.ProductId },
    });

    if (mediaIds) {
      await this.helper.nestedCreateOrUpdateWithMedia(
        mediaIds,
        data,
        'MediaProductType',
        'create',
        'id',
        'unique',
      );
    }
    return await this.prisma.productType.create({
      data,
      include: {
        MediaProductType: { include: { media: true } },
      },
    });
  }

  async findAll() {
    return await this.prisma.productType.findMany({
      include: {
        MediaProductType: {
          include: {
            media: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.productType.findFirst({
      where: {
        id,
    },
    include: {
      MediaProductType: {
        include: {
          media: true,
        },
      },
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

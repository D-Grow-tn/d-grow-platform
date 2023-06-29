import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProducttypeController } from './producttype.controller';
import { ProducttypeService } from './producttype.service';
import { HelpersService } from 'src/helpers/helpers.service';

@Module({
  controllers: [ProductsController,ProducttypeController],
  providers: [ProductsService,ProducttypeService,PrismaService,HelpersService]
})
export class ProductsModule {}

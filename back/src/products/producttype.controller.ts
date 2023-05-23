import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProducttypeService } from './producttype.service';
import { CreateProducttypeDto } from './dto/create-producttype.dto';
import { UpdateProducttypeDto } from './dto/update-producttype.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Producttype')
@Controller('producttype')
export class ProducttypeController {
  constructor(private readonly producttypeService: ProducttypeService) {}

  @Post()
  create(@Body() createProducttypeDto: CreateProducttypeDto) {
    return this.producttypeService.create(createProducttypeDto);
  }

  @Get()
  findAll() {
    return this.producttypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.producttypeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProducttypeDto: UpdateProducttypeDto) {
    return this.producttypeService.update(id, updateProducttypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producttypeService.remove(id);
  }
}

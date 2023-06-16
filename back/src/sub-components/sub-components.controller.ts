import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubComponentsService } from './sub-components.service';
import { CreateSubComponentDto } from './dto/create-sub-component.dto';
import { UpdateSubComponentDto } from './dto/update-sub-component.dto';

@Controller('sub-components')
export class SubComponentsController {
  constructor(private readonly subComponentsService: SubComponentsService) {}

  @Post()
  create(@Body() createSubComponentDto: CreateSubComponentDto) {
    return this.subComponentsService.create(createSubComponentDto);
  }

  @Get()
  findAll() {
    return this.subComponentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subComponentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubComponentDto: UpdateSubComponentDto) {
    return this.subComponentsService.update(id, updateSubComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subComponentsService.remove(id);
  }
}

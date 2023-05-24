import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubObjectivesService } from './sub-objectives.service';
import { CreateSubObjectiveDto } from './dto/create-sub-objective.dto';
import { UpdateSubObjectiveDto } from './dto/update-sub-objective.dto';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sub-objectives')
@Controller('sub-objectives')
export class SubObjectivesController {
  constructor(private readonly subObjectivesService: SubObjectivesService) {}

  @Post()
  create(@Body() createSubObjectiveDto: CreateSubObjectiveDto) {
    return this.subObjectivesService.create(createSubObjectiveDto);
  }

  @Get()
  findAll() {
    return this.subObjectivesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subObjectivesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubObjectiveDto: UpdateSubObjectiveDto) {
    return this.subObjectivesService.update(id, updateSubObjectiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subObjectivesService.remove(id);
  }
}

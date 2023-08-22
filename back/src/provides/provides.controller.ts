import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvidesService } from './provides.service';
import { CreateProvideDto } from './dto/create-provide.dto';
import { UpdateProvideDto } from './dto/update-provide.dto';

@Controller('provides')
export class ProvidesController {
  constructor(private readonly providesService: ProvidesService) {}

  @Post()
  create(@Body() createProvideDto: CreateProvideDto) {
    return this.providesService.create(createProvideDto);
  }

  @Get()
  findAll() {
    return this.providesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvideDto: UpdateProvideDto) {
    return this.providesService.update(id, updateProvideDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providesService.remove(id);
  }
}

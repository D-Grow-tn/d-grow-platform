import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BehaviorsService } from './behaviors.service';
import { CreateBehaviorDto } from './dto/create-behavior.dto';
import { UpdateBehaviorDto } from './dto/update-behavior.dto';

@Controller('behaviors')
export class BehaviorsController {
  constructor(private readonly BehaviorsService: BehaviorsService) {}

  @Post()
  create(@Body() createBehaviorDto: CreateBehaviorDto) {
    return this.BehaviorsService.create(createBehaviorDto);
  }

  @Get()
  findAll() {
    return this.BehaviorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.BehaviorsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBehaviorDto: UpdateBehaviorDto) {
    return this.BehaviorsService.update(id, updateBehaviorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.BehaviorsService.remove(id);
  }
}

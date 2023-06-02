import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InteractionService } from './interaction.service';
import { CreateInterationDto } from './dto/create-interaction.dto';

import { ApiTags } from '@nestjs/swagger';
@ApiTags('interactions')
@Controller('interactions')
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}

  @Post()
  create(@Body() createObjectiveDto: CreateInterationDto) {
    return this.interactionService.create(createObjectiveDto);
  }

  @Get('byProjectId/:id')
  findAll(@Param('id') projectId:string) {
    return this.interactionService.findAllByProjectId(projectId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interactionService.findOne(id);
  }

 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interactionService.remove(id);
  }
}

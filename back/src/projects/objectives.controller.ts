import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObjectivesService } from './objectives.service';
import { CreateObjectiveDto } from './dto/create-objective.dto';
import { UpdateObjectiveDto } from './dto/update-objective.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Objectives')
@Controller('objectives')
export class ObjectivesController {
  constructor(private readonly objectivesService: ObjectivesService) {}

  @Post()
  create(@Body() createObjectiveDto: CreateObjectiveDto) {
    return this.objectivesService.create(createObjectiveDto);
  }

  // @Get('/')
  // findAll() {
  //   return this.objectivesService.findAll();
  // }
  @Get('byProjectId/:id')
  findAll(@Param('id') projectId:string) {
    return this.objectivesService.findAllByProjectId(projectId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.objectivesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObjectiveDto: UpdateObjectiveDto) {
    return this.objectivesService.update(id, updateObjectiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.objectivesService.remove(id);
  }
}

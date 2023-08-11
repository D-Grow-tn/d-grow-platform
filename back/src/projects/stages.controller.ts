import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StagesService } from './stages.service';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Stages')
@Controller('stages')
export class StagesController {
  constructor(private readonly stagesService: StagesService) {}

  @Post(':objectiveId')
  createByObjectiveId(@Param('objectiveId') objectiveId: string, @Body() createStageDto: CreateStageDto) {
    return this.stagesService.createByObjectiveId(objectiveId, createStageDto);
  }
  


  @Get('byObjectiveId/:id')
  findAll(@Param('id') objectiveId:string) {
    return this.stagesService.findAllByObjectiveId(objectiveId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStageDto: UpdateStageDto) {
    return this.stagesService.update(id, updateStageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stagesService.remove(id);
  }
}

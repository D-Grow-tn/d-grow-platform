import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkTimeService } from './work-time.service';
import { CreateWorkTimeDto } from './dto/create-work-time.dto';
import { UpdateWorkTimeDto } from './dto/update-work-time.dto';

@Controller('work-time')
export class WorkTimeController {
  constructor(private readonly workTimeService: WorkTimeService) {}

  @Post()
  create(@Body() createWorkTimeDto: CreateWorkTimeDto) {
    return this.workTimeService.create(createWorkTimeDto);
  }

  @Get()
  findAll() {
    return this.workTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workTimeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkTimeDto: UpdateWorkTimeDto) {
    return this.workTimeService.update(+id, updateWorkTimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workTimeService.remove(+id);
  }
}

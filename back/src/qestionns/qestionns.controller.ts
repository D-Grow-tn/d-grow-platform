import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QestionnsService } from './qestionns.service';
import { CreateQestionnDto } from './dto/create-qestionn.dto';
import { UpdateQestionnDto } from './dto/update-qestionn.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('questionns')
@Controller('qestionns')
export class QestionnsController {
  constructor(private readonly qestionnsService: QestionnsService) {}

  @Post()
  create(@Body() createQestionnDto: CreateQestionnDto) {
    return this.qestionnsService.create(createQestionnDto);
  }

  @Get()
  findAll() {
    return this.qestionnsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qestionnsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQestionnDto: UpdateQestionnDto) {
    return this.qestionnsService.update(id, updateQestionnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qestionnsService.remove(id);
  }
}

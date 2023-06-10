import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentSubComponentsService } from './content-sub-components.service';
import { CreateContentSubComponentDto } from './dto/create-content-sub-component.dto';
import { UpdateContentSubComponentDto } from './dto/update-content-sub-component.dto';

@Controller('content-sub-components')
export class ContentSubComponentsController {
  constructor(private readonly contentSubComponentsService: ContentSubComponentsService) {}

  @Post()
  create(@Body() createContentSubComponentDto: CreateContentSubComponentDto) {
    return this.contentSubComponentsService.create(createContentSubComponentDto);
  }

  @Get()
  findAll() {
    return this.contentSubComponentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentSubComponentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentSubComponentDto: UpdateContentSubComponentDto) {
    return this.contentSubComponentsService.update(id, updateContentSubComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentSubComponentsService.remove(id);
  }
}

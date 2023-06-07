import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentPagesService } from './content-pages.service';
import { CreateContentPageDto } from './dto/create-content-page.dto';
import { UpdateContentPageDto } from './dto/update-content-page.dto';

@Controller('content-pages')
export class ContentPagesController {
  constructor(private readonly contentPagesService: ContentPagesService) {}

  @Post()
  create(@Body() createContentPageDto: CreateContentPageDto) {
    return this.contentPagesService.create(createContentPageDto);
  }

  @Get()
  findAll() {
    return this.contentPagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentPagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentPageDto: UpdateContentPageDto) {
    return this.contentPagesService.update(id, updateContentPageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentPagesService.remove(id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParagraphsService } from './paragraphs.service';
import { CreateParagraphDto } from './dto/create-paragraph.dto';
import { UpdateParagraphDto } from './dto/update-paragraph.dto';

@Controller('paragraphs')
export class ParagraphsController {
  constructor(private readonly paragraphsService: ParagraphsService) {}

  @Post()
  create(@Body() createParagraphDto: CreateParagraphDto) {
    return this.paragraphsService.create(createParagraphDto);
  }

  @Get()
  findAll() {
    return this.paragraphsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paragraphsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParagraphDto: UpdateParagraphDto) {
    return this.paragraphsService.update(id, updateParagraphDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paragraphsService.remove(id);
  }
}

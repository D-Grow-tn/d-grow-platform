import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SectionContentPagesService } from './section-content-pages.service';
import { CreateSectionContentPageDto } from './dto/create-section-content-page.dto';
import { UpdateSectionContentPageDto } from './dto/update-section-content-page.dto';

@Controller('section-content-pages')
export class SectionContentPagesController {
  constructor(private readonly sectionContentPagesService: SectionContentPagesService) {}

  @Post()
  create(@Body() createSectionContentPageDto: CreateSectionContentPageDto) {
    return this.sectionContentPagesService.create(createSectionContentPageDto);
  }

  @Get()
  findAll() {
    return this.sectionContentPagesService.findAll();
  }

  @Get(':sectionId/contentPgeId')
  findOne(@Param('sectionId') @Param('contentPageId') sectionId:string , contentPageId:string) {
    return  this.sectionContentPagesService.findOne(sectionId,contentPageId);
  }

  @Patch(':sectionId/contentPgeId')
  update(@Param('sectionId') @Param('contentPageId') sectionId:string , contentPageId:string, @Body() updateSectionContentPageDto: UpdateSectionContentPageDto) {
    return this.sectionContentPagesService.update(sectionId,contentPageId, updateSectionContentPageDto);
  }

  @Delete(':sectionId/contentPgeId')
  remove(@Param('sectionId') @Param('contentPageId') sectionId:string , contentPageId:string,) {
    return this.sectionContentPagesService.remove(sectionId,contentPageId);
  }
}

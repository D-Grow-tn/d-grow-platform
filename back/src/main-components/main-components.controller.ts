import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MainComponentsService } from './main-components.service';
import { CreateMainComponentDto } from './dto/create-main-component.dto';
import { UpdateMainComponentDto } from './dto/update-main-component.dto';

@Controller('website-settings')
export class MainComponentsController {
  constructor(private readonly mainComponentsService: MainComponentsService) {}

  @Post()
  create(@Body() createMainComponentDto: CreateMainComponentDto) {
    return this.mainComponentsService.create(createMainComponentDto);
  }

  @Get()
  findAll() {
    return this.mainComponentsService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.mainComponentsService.findOne(id);
  }

  @Get('by-title/:title')
  findOneByTitle(@Param('title') title: string) {
    return this.mainComponentsService.findOneByTitle(title);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMainComponentDto: UpdateMainComponentDto,
  ) {
    return this.mainComponentsService.update(id, updateMainComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainComponentsService.remove(id);
  }
}

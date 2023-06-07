import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ButtonsService } from './buttons.service';
import { CreateButtonDto } from './dto/create-button.dto';
import { UpdateButtonDto } from './dto/update-button.dto';

@Controller('buttons')
export class ButtonsController {
  constructor(private readonly buttonsService: ButtonsService) {}

  @Post()
  create(@Body() createButtonDto: CreateButtonDto) {
    return this.buttonsService.create(createButtonDto);
  }

  @Get()
  findAll() {
    return this.buttonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buttonsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateButtonDto: UpdateButtonDto) {
    return this.buttonsService.update(id, updateButtonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buttonsService.remove(id);
  }
}

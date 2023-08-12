import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevisService } from './devis.service';
import { CreateDeviDto } from './dto/create-devi.dto';
import { UpdateDeviDto } from './dto/update-devi.dto';

@Controller('devis')
export class DevisController {
  constructor(private readonly devisService: DevisService) {}

  @Post()
  create(@Body() createDeviDto: CreateDeviDto) {
    return this.devisService.create(createDeviDto);
  }

  @Get()
  findAll() {
    return this.devisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devisService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviDto: UpdateDeviDto) {
    return this.devisService.update(id, updateDeviDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devisService.remove(id);
  }
}

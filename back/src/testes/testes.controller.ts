import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestesService } from './testes.service';
import { CreateTestisDto } from './dto/create-testis.dto';
import { UpdateTestisDto } from './dto/update-testis.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('testes')
@Controller('testes')
export class TestesController {
  constructor(private readonly testesService: TestesService) {}

  @Post()
  create(@Body() createTestisDto: CreateTestisDto) {
    return this.testesService.create(createTestisDto);
  }

  @Get()
  findAll() {
    return this.testesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestisDto: UpdateTestisDto) {
    return this.testesService.update(id, updateTestisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testesService.remove(id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DecisionsService } from './decisions.service';
import { CreateDecisionDto } from './dto/create-decision.dto';
import { UpdateDecisionDto } from './dto/update-decision.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags ('Decisions')
@Controller('Decisions')
export class DecisionsController {
  constructor(private readonly DecisionsService: DecisionsService) {}

  @Post()
  create(@Body() createDecisionDto: CreateDecisionDto) {
    return this.DecisionsService.create(createDecisionDto);
  }
 
  
  @Get()
  findAll() {
    return this.DecisionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.DecisionsService.findOne(id);
  }

  @Get('by_employee/:employeeId')
  findByEmployeeId(@Param('employeeId')employeeId:string){
    return this.DecisionsService.findByEmployeeId(employeeId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDecisionDto: UpdateDecisionDto) {
    return this.DecisionsService.update(id, updateDecisionDto);
  }

  @Delete(':id')
  remove(@Param('id') id:string) {
    return this.DecisionsService.remove(id);
  }
}

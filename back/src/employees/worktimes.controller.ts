import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorktimesService } from './worktimes.service';
import { CreateWorktimeDto } from './dto/create-worktime.dto';
import { UpdateWorktimeDto } from './dto/update-worktime.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';



@ApiTags('worktimes')
@Controller('worktimes')
export class WorktimesController {
  constructor(private readonly worktimesService: WorktimesService) {}

  @Post()
  create(@Body() createWorktimeDto: CreateWorktimeDto) {
    return this.worktimesService.create(createWorktimeDto);
  }

  @Get()
  findAll() {
    return this.worktimesService.findAll();
  }

  @Get('by-day/:date')
  findAllbyDay(@Param('date') date: Date) {
    return this.worktimesService.findAllbyDay(date);
  }

  @Get('by-employee/:employeeId')
  findOnebyEmployee(@Param('employeeId') employeeId: string) {
    return this.worktimesService.findOnebyEmployee(employeeId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorktimeDto: UpdateWorktimeDto) {
    return this.worktimesService.update(+id, updateWorktimeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.worktimesService.remove(+id);
  }
}

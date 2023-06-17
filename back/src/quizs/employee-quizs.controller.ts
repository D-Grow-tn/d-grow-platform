import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeQuizsService } from './employee-quizs.service';
import { CreateEmployeeQuizDto } from './dto/create-employee-quiz.dto';
import { UpdateEmployeeQuizDto } from './dto/update-employee-quiz.dto';

@Controller('employee-quizs')
export class EmployeeQuizsController {
  constructor(private readonly employeeQuizsService: EmployeeQuizsService) {}

  @Post()
  create(@Body() createEmployeeQuizDto: CreateEmployeeQuizDto) {
    return this.employeeQuizsService.create(createEmployeeQuizDto);
  }

  @Get()
  findAll() {
    return this.employeeQuizsService.findAll();
  }

  @Get('by-employee/:employeeId') 
  findAllByEmployee(@Param('emlpoyeeId') employeeId:string) {
    return this.employeeQuizsService.findAllByEmployee(employeeId);
  }

  @Get('one/:quizId/:employeeId')
  findOne(@Param('quizId') @Param('employeeId')quizId: string, employeeId:string,) {
    return this.employeeQuizsService.findOne(quizId,employeeId);
  }

  @Patch(':quizId/employeeId')
  update(@Param('quizId') @Param('employeeId') quizId: string, employeeId:string, @Body() updateEmployeeQuizDto: UpdateEmployeeQuizDto) {
    return this.employeeQuizsService.update(quizId,employeeId, updateEmployeeQuizDto);
  }

  @Delete(':quizId/employeeId')
  remove(@Param('quizId') @Param('employeeId')quizId:string,  employeeId: string) {
    return this.employeeQuizsService.remove(quizId,employeeId);
  }
}

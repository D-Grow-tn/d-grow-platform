import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeTestsService } from './employee-tests.service';
import { CreateEmployeeTestDto } from './dto/create-employee-test.dto';
import { UpdateEmployeeTestDto } from './dto/update-employee-test.dto';

@Controller('employee-tests')
export class EmployeeTestsController {
  constructor(private readonly employeeTestsService: EmployeeTestsService) {}

  @Post()
  create(@Body() createEmployeeTestDto: CreateEmployeeTestDto) {
    return this.employeeTestsService.create(createEmployeeTestDto);
  }

  @Get()
  findAll() {
    return this.employeeTestsService.findAll();
  }

  @Get('by-employee/:employeeId')
  findAllByEmployee(@Param('employeeId') employeeId: string) {
    return this.employeeTestsService.findAllByEmployee(employeeId);
  }
  @Get('one/:testId/:employeeId')
  findOne(@Param('testId') @Param('employeeId') testId:string, employeeId:string){
    return  this.employeeTestsService.findOne(testId ,employeeId ) ;
  }
  @Patch(':testId/:employeeId')
  update(@Param('testId') @Param('employeeId') testId:string, employeeId:string, @Body() updateEmployeeTestDto: UpdateEmployeeTestDto) {
    return this.employeeTestsService.update(testId ,employeeId , updateEmployeeTestDto);
  }

  @Delete(':testId/:employeeId')
  remove(@Param('testId') @Param('employeeId') testId:string, employeeId:string) {
    return this.employeeTestsService.remove(testId ,employeeId );
  }
}

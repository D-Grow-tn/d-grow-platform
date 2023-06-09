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

  @Get(':employeeId')
  findOne(@Param('employeeId')  employeeId: string) {
    return this.employeeTestsService.findManybyEmployeeId( employeeId);
  }

  @Patch(':employeeId/:testId')
  update(@Param('employeeId') employeeId: string,
   @Param('testId') testId: string
    , @Body() updateEmployeeTestDto: UpdateEmployeeTestDto) {
    return this.employeeTestsService.update(employeeId,testId, updateEmployeeTestDto);
  }

  @Delete(':employeeId/testId')
  remove(@Param('employeeId') @Param('testId')  employeeId: string, testId:string) {
    return this.employeeTestsService.remove(testId,employeeId,);
  }
}

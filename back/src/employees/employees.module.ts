import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';

@Module({
  controllers: [EmployeesController,RequestsController],
  providers: [EmployeesService,RequestsService]
})
export class EmployeesModule {}

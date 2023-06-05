import { Module } from '@nestjs/common';
import { EmployeeTestsService } from './employee-tests.service';
import { EmployeeTestsController } from './employee-tests.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EmployeeTestsController],
  providers: [EmployeeTestsService,PrismaService]
})
export class EmployeeTestsModule {}

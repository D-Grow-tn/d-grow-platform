import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeTestsController } from './employee-tests.controller';
import { EmployeeTestsService } from './employee-tests.service';

@Module({
  controllers: [TestsController,EmployeeTestsController],
  providers: [TestsService,PrismaService,EmployeeTestsService]
})
export class TestsModule {}
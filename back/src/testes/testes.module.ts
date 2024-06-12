import { Module } from '@nestjs/common';
import { TestesService } from './testes.service';
import { TestesController } from './testes.controller';
import { QuestionnTestsService } from './questionn-tests.service';
import { EmployeeTestsService } from './employee-tests.service';
import { QuestionnTestsController } from './questionn-tests.controller';
import { EmployeeTestsController } from './employee-tests.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TestesController,QuestionnTestsController,EmployeeTestsController],
  providers: [TestesService,QuestionnTestsService,EmployeeTestsService,PrismaService]
})
export class TestesModule {}

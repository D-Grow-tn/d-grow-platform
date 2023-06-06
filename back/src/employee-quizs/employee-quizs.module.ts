import { Module } from '@nestjs/common';
import { EmployeeQuizsService } from './employee-quizs.service';
import { EmployeeQuizsController } from './employee-quizs.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EmployeeQuizsController],
  providers: [EmployeeQuizsService,PrismaService]
})
export class EmployeeQuizsModule {}

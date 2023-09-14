import { Module } from '@nestjs/common';
import { QuizsService } from './quizs.service';
import { QuizsController } from './quizs.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmployeeQuizsService } from './employee-quizs.service';
import { EmployeeQuizsController } from './employee-quizs.controller';

import { QuestionQuizsService } from './question-quizs.service';

import { QuestionQuizsController } from './question-quizs.controller';

@Module({
  controllers: [QuizsController,EmployeeQuizsController,QuestionQuizsController],
  providers: [QuizsService,PrismaService,EmployeeQuizsService,QuestionQuizsService]
})
export class QuizsModule {}

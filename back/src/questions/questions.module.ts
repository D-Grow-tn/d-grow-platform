import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { OptionquestionsService } from './option-questions.service';
import { OptionquestionsController } from './option-questions.controller';

@Module({
  controllers: [QuestionsController,OptionquestionsController],
  providers: [QuestionsService,PrismaService,OptionquestionsService]
})
export class QuestionsModule {}

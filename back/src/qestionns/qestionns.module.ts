import { Module } from '@nestjs/common';
import { QestionnsService } from './qestionns.service';
import { QestionnsController } from './qestionns.controller';
import { AnswerQuestionnsService } from './answer-questionns.service';
import { AnswerQuestionnsController } from './answer-questionns.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [QestionnsController,AnswerQuestionnsController],
  providers: [QestionnsService,AnswerQuestionnsService,PrismaService]
})
export class QestionnsModule {}

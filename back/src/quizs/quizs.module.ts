import { Module } from '@nestjs/common';
import { QuizsService } from './quizs.service';
import { QuizsController } from './quizs.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [QuizsController],
  providers: [QuizsService,PrismaService]
})
export class QuizsModule {}

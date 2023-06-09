import { Module } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TechnologiesController],
  providers: [TechnologiesService,PrismaService]
})
export class TechnologiesModule {}

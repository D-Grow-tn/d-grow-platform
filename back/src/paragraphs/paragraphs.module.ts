import { Module } from '@nestjs/common';
import { ParagraphsService } from './paragraphs.service';
import { ParagraphsController } from './paragraphs.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ParagraphsController],
  providers: [ParagraphsService,PrismaService]
})
export class ParagraphsModule {}

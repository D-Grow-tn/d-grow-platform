import { Module } from '@nestjs/common';
import { SectionContentPagesService } from './section-content-pages.service';
import { SectionContentPagesController } from './section-content-pages.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SectionContentPagesController],
  providers: [SectionContentPagesService,PrismaService]
})
export class SectionContentPagesModule {}

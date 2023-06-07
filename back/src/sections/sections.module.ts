import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { PrismaService } from 'src/prisma/prisma.service';

import { ContentPagesService } from 'src/content-pages/content-pages.service';

@Module({
  controllers: [SectionsController],
  providers: [SectionsService,PrismaService]
})
export class SectionsModule {}

import { Module } from '@nestjs/common';
import { ContentPagesService } from './content-pages.service';
import { ContentPagesController } from './content-pages.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ContentPagesController],
  providers: [ContentPagesService,PrismaService]
})
export class ContentPagesModule {}

import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PagesController],
  providers: [PagesService,PrismaService]
})
export class PagesModule {}

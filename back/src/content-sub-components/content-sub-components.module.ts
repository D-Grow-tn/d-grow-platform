import { Module } from '@nestjs/common';
import { ContentSubComponentsService } from './content-sub-components.service';
import { ContentSubComponentsController } from './content-sub-components.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ContentSubComponentsController],
  providers: [ContentSubComponentsService,PrismaService]
})
export class ContentSubComponentsModule {}

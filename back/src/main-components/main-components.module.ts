import { Module } from '@nestjs/common';
import { MainComponentsService } from './main-components.service';
import { MainComponentsController } from './main-components.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MainComponentsController],
  providers: [MainComponentsService,PrismaService]
})
export class MainComponentsModule {}

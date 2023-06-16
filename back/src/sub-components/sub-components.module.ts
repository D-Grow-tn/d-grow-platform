import { Module } from '@nestjs/common';
import { SubComponentsService } from './sub-components.service';
import { SubComponentsController } from './sub-components.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SubComponentsController],
  providers: [SubComponentsService,PrismaService]
})
export class SubComponentsModule {}

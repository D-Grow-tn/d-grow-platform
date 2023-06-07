import { Module } from '@nestjs/common';
import { ButtonsService } from './buttons.service';
import { ButtonsController } from './buttons.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ButtonsController],
  providers: [ButtonsService,PrismaService]
})
export class ButtonsModule {}

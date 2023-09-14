import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OptionsService } from './options.service';
import { OptionsController } from './options.controller';

@Module({
  controllers: [OptionsController],
  providers: [OptionsService, PrismaService],
})
export class OptionsModule {}

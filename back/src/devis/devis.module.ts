import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { DevisService } from './devis.service';
import { DevisController } from './devis.controller';

@Module({
  controllers: [DevisController],
  providers: [DevisService,PrismaService]
})
export class DevisModule {}

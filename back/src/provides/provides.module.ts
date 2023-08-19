import { Module } from '@nestjs/common';
import { ProvidesService } from './provides.service';
import { ProvidesController } from './provides.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProvidesController],
  providers: [ProvidesService,PrismaService]
})
export class ProvidesModule {}

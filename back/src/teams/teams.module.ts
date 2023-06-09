import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TeamsController],
  providers: [TeamsService,PrismaService]
})
export class TeamsModule {}

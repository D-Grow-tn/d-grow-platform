import { Module } from '@nestjs/common';
import { TeamMenbershipsService } from './team-menberships.service';
import { TeamMenbershipsController } from './team-menberships.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TeamMenbershipsController],
  providers: [TeamMenbershipsService,PrismaService]
})
export class TeamMenbershipsModule {}

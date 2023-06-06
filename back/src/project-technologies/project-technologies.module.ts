import { Module } from '@nestjs/common';
import { ProjectTechnologiesService } from './project-technologies.service';
import { ProjectTechnologiesController } from './project-technologies.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProjectTechnologiesController],
  providers: [ProjectTechnologiesService,PrismaService]
})
export class ProjectTechnologiesModule {}

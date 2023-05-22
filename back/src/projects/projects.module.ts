import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { StagesController } from './stages.controller';
import { StagesService } from './stages.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ObjectivesController } from './objectives.controller';
import { ObjectivesService } from './objectives.service';
import { SubObjectivesService } from './sub-objectives.service';
import { SubObjectivesController } from './sub-objectives.controller';

@Module({
  controllers: [ProjectsController,StagesController,ObjectivesController,SubObjectivesController],
  providers: [ProjectsService,StagesService,PrismaService,ObjectivesService,SubObjectivesService]
})
export class ProjectsModule {}

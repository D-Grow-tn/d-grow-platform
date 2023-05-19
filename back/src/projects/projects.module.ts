import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { StagesController } from './stages.controller';
import { StagesService } from './stages.service';

@Module({
  controllers: [ProjectsController,StagesController],
  providers: [ProjectsService,StagesService]
})
export class ProjectsModule {}

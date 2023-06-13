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
import { InteractionController } from './interaction.controller';
import { InteractionService } from './interaction.service';
import { HelpersService } from 'src/helpers/helpers.service';

@Module({
  controllers: [ProjectsController,StagesController,ObjectivesController,SubObjectivesController,InteractionController],
  providers: [ProjectsService,StagesService,PrismaService,ObjectivesService,SubObjectivesService,InteractionService,HelpersService]
})
export class ProjectsModule {}

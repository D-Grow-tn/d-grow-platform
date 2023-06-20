import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { BehaviorsService } from './behaviors.service';
import { BehaviorsController } from './behaviors.controller';
import {DecisionsService} from './decisions.service'
import{DecisionsController} from './decisions.controller'
import{EventsController}from './events.controller'
import {EventsService} from './events.service'
import { HelpersService } from 'src/helpers/helpers.service';




@Module({
  controllers: [EmployeesController,RequestsController,BehaviorsController,DecisionsController,EventsController],
  providers: [EmployeesService,RequestsService,PrismaService,BehaviorsService,DecisionsService,EventsService,HelpersService]
})
export class EmployeesModule {}

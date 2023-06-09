import { Controller, Get, Post, Body, Patch, Param, Delete ,UseGuards} from '@nestjs/common';
import { InteractionService } from './interaction.service';
import { CreateInterationDto } from './dto/create-interaction.dto';
import {ApiTags,ApiSecurity} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/currentUser';


@ApiTags('interactions')
@Controller('interactions')
export class InteractionController {
  constructor(private readonly interactionService: InteractionService) {}
  @ApiSecurity('apiKey')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createObjectiveDto: CreateInterationDto ,@CurrentUser () user: any) {
    return this.interactionService.create(createObjectiveDto,user.id);
  }

  @Get('byProjectId/:id')
  findAll(@Param('id') projectId:string) {
    return this.interactionService.findAllByProjectId(projectId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interactionService.findOne(id);
  }

 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interactionService.remove(id);
  }
}

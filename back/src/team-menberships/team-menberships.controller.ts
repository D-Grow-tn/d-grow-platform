import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamMenbershipsService } from './team-menberships.service';
import { CreateTeamMenbershipDto } from './dto/create-team-menbership.dto';
import { UpdateTeamMenbershipDto } from './dto/update-team-menbership.dto';

@Controller('team-menberships')
export class TeamMenbershipsController {
  constructor(private readonly teamMenbershipsService: TeamMenbershipsService) {}

  @Post()
  create(@Body() createTeamMenbershipDto: CreateTeamMenbershipDto) {
    return this.teamMenbershipsService.create(createTeamMenbershipDto);
  }

  @Get()
  findAll() {
    return this.teamMenbershipsService.findAll();
  }

  @Get(':employeeId/teamId')
  findOne(@Param('employeeId') @Param('teamId')  employeeId: string, teamId:string) {
    return this.teamMenbershipsService.findOne(teamId,employeeId,);
  }

  @Patch(':employeeId/teamId')
  update(@Param('employeeId') @Param('teamId')  employeeId: string, teamId:string,@Body() updateTeamMenbershipDto: UpdateTeamMenbershipDto) {
    return this.teamMenbershipsService.update(teamId,employeeId, updateTeamMenbershipDto);
  }

  @Delete(':employeeId/teamId')
  remove(@Param('employeeId') @Param('teamId')  employeeId: string, teamId:string) {
    return this.teamMenbershipsService.remove(teamId,employeeId,);
  }
}

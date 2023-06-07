import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectTechnologiesService } from './project-technologies.service';
import { CreateProjectTechnologyDto } from './dto/create-project-technology.dto';
import { UpdateProjectTechnologyDto } from './dto/update-project-technology.dto';

@Controller('project-technologies')
export class ProjectTechnologiesController {
  constructor(private readonly projectTechnologiesService: ProjectTechnologiesService) {}

  @Post()
  create(@Body() createProjectTechnologyDto: CreateProjectTechnologyDto) {
    return this.projectTechnologiesService.create(createProjectTechnologyDto);
  }

  @Get()
  findAll() {
    return this.projectTechnologiesService.findAll();
  }

  @Get(':projectId/technologyId')
  findOne(@Param('projectId') @Param('technologyId') technologyId: string,projectId:string) {
    return this.projectTechnologiesService.findOne(
     projectId,technologyId
    );
  }

  @Patch(':projectId/technologyId')
  update(@Param('projectId') @Param('technologyId') technologyId: string,projectId:string, @Body() updateProjectTechnologyDto: UpdateProjectTechnologyDto) {
    return this.projectTechnologiesService.update(projectId,technologyId, updateProjectTechnologyDto);
  }

  @Delete(':projectId/technologyId')
  remove(@Param('projectId') @Param('technologyId') technologyId: string,projectId:string,) {
    return this.projectTechnologiesService.remove(projectId,technologyId);
  }
}

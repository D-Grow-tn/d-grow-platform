import { Injectable } from '@nestjs/common';
import { CreateProjectTechnologyDto } from './dto/create-project-technology.dto';
import { UpdateProjectTechnologyDto } from './dto/update-project-technology.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectTechnologiesService {
  constructor(private readonly prisma:PrismaService) {}
  async create(createProjectTechnologyDto: CreateProjectTechnologyDto) {
    return await this.prisma.projectTechnology.create({
      data: createProjectTechnologyDto,
    });
  }

async  findAll() {
    return  await this.prisma.projectTechnology.findMany({
      include: {technologies:true}
    });
  }

async  findOne(projectId:string, technologyId:string) {
    return await this.prisma.projectTechnology.findFirst({
      where:{projectId,technologyId}
    });
  }

 async update(projectId:string, technologyId:string, updateProjectTechnologyDto: UpdateProjectTechnologyDto) {
    return await this.prisma.projectTechnology.updateMany({
      where:{projectId,technologyId},
      data:updateProjectTechnologyDto,
    }) ;
  }

 async remove(projectId:string, technologyId:string,) {
    return await this.prisma.projectTechnology.deleteMany({
      where:{projectId,technologyId},
      });
  }
}

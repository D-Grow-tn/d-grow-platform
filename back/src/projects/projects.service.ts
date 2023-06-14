import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Media } from '../medias/entities/media.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateProjectDto) {
    const { projectTechnologyIds, ...rest } = dto;
    return this.prisma.project.create({
      data: {
        ...rest,
        projectTechnologies: {
          create: projectTechnologyIds.map((id) => {
            return {
              technologyId: id,
            };
          }),
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.project.findMany({
      include: {
        cover: true,
        projectTechnologies: { include: { technologies: true } },
      },
    });
  }

  async findOne(id: string,prisma:Prisma.TransactionClient=this.prisma) {
    return await this.prisma.project.findUnique({
      where: { id },
      include: {
        objective: { include: { subobjective: true, Stage: true } },
        projectManager: true,
        consultant: true,
        interaction: { include: { User: true } },
        contarct: true,
        projectTechnologies:true,
      },
    });
  }
  async findAllByClient(clientId: string) {
    return await this.prisma.project.findMany({
      where: { clientId },
      include: { cover: true },
    });
  }

    async update(id: string, data: UpdateProjectDto) {
    const { projectTechnologyIds,...rest } = data
    return await this.prisma.$transaction(async (prisma)=>{
      const project= await this.findOne(id,prisma)
      project.projectTechnologies.forEach(async technology => {
        if(!projectTechnologyIds.includes(technology.technologyId)){
          await prisma.projectTechnology.delete({where:{
            projectTechnology:{projectId:id,technologyId:technology.technologyId}
          }})
        }
      })
      return await this.prisma.project.update({
        where: {id},
        data: {...rest,
        projectTechnologies:{
          connectOrCreate : projectTechnologyIds.map((technology)=>({
            create:{technologyId:technology},
            where: {projectTechnology:{projectId:id,technologyId:technology}}
          }))
        }}
      })
    })
  }

  async remove(id: string) {
    return await this.prisma.$transaction(async (prisma) => {
       await prisma.projectTechnology.deleteMany({
         where: {
           technologyId: id,
         },
       });
      return await prisma.project.delete({
         where: {
           id,
         },
       });
     });
   }
   
 }


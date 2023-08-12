import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Media } from './../medias/entities/media.entity';
import { HelpersService } from 'src/helpers/helpers.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly helper: HelpersService,
  ) {}
  async create(dto: CreateProjectDto) {
    const { projectTechnologyIds, ...rest } = dto;
    let data = rest;
    const team = await this.prisma.team.findFirst({
      where: { id: dto.teamId },
      include: { teamMembership: true },
    });
    if (projectTechnologyIds) {
      if (Array.isArray(projectTechnologyIds)) {
        data['projectTechnologies'] = {
          create: await Promise.all(
            projectTechnologyIds.map(async (elem) => {
              if (typeof elem === 'string') {
                await this.helper.notFound('technology', 'findUniqueOrThrow', {
                  where: { id: elem },
                });
                return {
                  technologies: {
                    connect: {
                      id: elem,
                    },
                  },
                };
              } else if (typeof elem === 'object') {
                if (!Array.isArray(elem))
                  return {
                    technologies: {
                      create: elem,
                    },
                  };
              }
            }),
          ),
        };
      } else {
        throw new HttpException(
          'project TechnologyIds must be an array',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    return this.prisma.project.create({
      data: {
        ...data,
        ChatRoom: {
          create: {
            title: dto.name,
            type: 'project',
            employeeChatRoom: {
              create: team.teamMembership.map((elem) => ({
                employeeId: elem.employeeId,
              })),
            },
          },
        },
      },
      include: { projectTechnologies: { include: { technologies: true } } },
    });
  }

  async findAll() {
    return await this.prisma.project.findMany({
      include: {
        cover: true,
        team: { include: { teamMembership: { include: { employee: true } } } },
        objective: { include: { subobjective: true, Stage: true } },
        projectManager: true,
        client: true,
        consultant: true,
        interaction: { include: { User: true } },
        contract: true,
        ChatRoom: true,
        projectTechnologies: { include: { technologies: true } },
      },
    });
  }

  async findOne(id: string, prisma: Prisma.TransactionClient = this.prisma) {
    return await this.prisma.project.findUnique({
      where: { id },
      include: {
        team: { include: { teamMembership: { include: { employee: true } } } },
        objective: { include: { subobjective: true, Stage: true } },
        projectManager: true,
        client: true,
        consultant: true,
        interaction: { include: { User: true } },
        contract: true,
        ChatRoom: true,
        projectTechnologies: { include: { technologies: true } },
        cover:true,
      },
    });
  }
  async findAllByClient(clientId: string) {
    return await this.prisma.project.findMany({
      where: { clientId },
      include: { cover: true },
    });
  }
  // PM = ProjectManager
  async findAllByPM(projectManagerId: string) {
    return await this.prisma.project.findMany({
      where: { projectManagerId },
      include: {
        projectManager: true,
        consultant: true,
        client: true,
        projectTechnologies: { include: { technologies: true } },
        team: true,
      },
    });
  }

  async update(id: string, data: UpdateProjectDto) {
    const { projectTechnologyIds, ...rest } = data;
    return await this.prisma.$transaction(async (prisma) => {
      const project = await this.findOne(id, prisma);
      project.projectTechnologies.forEach(async (technology) => {
        if (!projectTechnologyIds.includes(technology.technologyId)) {
          await prisma.projectTechnology.delete({
            where: {
              projectTechnology: {
                projectId: id,
                technologyId: technology.technologyId,
              },
            },
          });
        }
      });
      return await this.prisma.project.update({
        where: { id },
        data: {
          ...rest,
          projectTechnologies: {
            connectOrCreate: projectTechnologyIds.map((technology) => ({
              create: { technologyId: technology },
              where: {
                projectTechnology: { projectId: id, technologyId: technology },
              },
            })),
          },
        },
      });
    });
    // return await this.prisma.project.update({
    //       where: {id},
    //       data:data
    // })
  }

  // async remove(id: string) {
  //   return await this.prisma.$transaction(async (prisma) => {
  //      await prisma.projectTechnology.deleteMany({
  //        where: {
  //          technologyId: id,
  //        },
  //      });
  //     return await prisma.project.delete({
  //        where: {
  //          id,
  //        },
  //      });
  //    });
  //  }
  async remove(id: string) {
    return await this.prisma.$transaction(async (prisma) => {
      await prisma.projectTechnology.deleteMany({
        where: {
          projectId: id,
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

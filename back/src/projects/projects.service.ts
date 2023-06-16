import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Media } from './../medias/entities/media.entity';
import { HelpersService } from 'src/helpers/helpers.service';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly helper: HelpersService,
  ) {}
  async create(dto: CreateProjectDto) {
    const { projectTechnologyIds, ...rest } = dto;
    let data = rest;
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
          'projecTechnologyIds must be an array',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    return this.prisma.project.create({
      data,
      include: { projectTechnologies: { include: { technologies: true } } },
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

  async findOne(id: string) {
    return await this.prisma.project.findUnique({
      where: { id },
      include: {
        objective: { include: { subobjective: true, Stage: true } },
        projectManager: true,
        consultant: true,
        interaction: { include: { User: true } },
        contract: true,
      },
    });
  }
  async findAllByClient(clientId: string) {
    return await this.prisma.project.findMany({
      where: { clientId },
      include: { cover: true },
    });
  }

  update(id: string, data: UpdateProjectDto) {
    return this.prisma.project.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.project.delete({ where: { id } });
  }
}

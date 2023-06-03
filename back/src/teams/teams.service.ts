import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamsService {
  constructor(private readonly prisma:PrismaService) {}
 async create(data: CreateTeamDto) {
    return await this.prisma.team.create({
      data,
    }) ;
  }

 async findAll() {
    return await this.prisma.team.findMany({});
  }

 async findOne(id: string) {
    return await this.prisma.team.findFirst({
      where:{id,}

    });
  }

 async update(id: string, data: UpdateTeamDto) {
    return await this.prisma.team.update({
      where:{id},
      data
    });
  }

async  remove(id: string) {
    return this.prisma.team.delete({
      where:{id,}
    });
  }
}

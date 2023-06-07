import { Injectable } from '@nestjs/common';
import { CreateTeamMenbershipDto } from './dto/create-team-menbership.dto';
import { UpdateTeamMenbershipDto } from './dto/update-team-menbership.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamMenbershipsService {
  constructor(private readonly prisma:PrismaService){}
  async create(createTeamMenbershipDto: CreateTeamMenbershipDto) {
    return this.prisma.teamMembership.create({
      data:createTeamMenbershipDto,
    });
  }

  async findAll() {
    return  await this.prisma.teamMembership.findMany({});
  }

 async findOne(teamId: string,employeeId:string) {
    return this.prisma.teamMembership.findFirst({
      where:{teamId,employeeId,}
    });
  }

 async update(teamId: string,employeeId:string, updateTeamMenbershipDto: UpdateTeamMenbershipDto) {
    return this.prisma.teamMembership.updateMany({
      where:{teamId,employeeId},
      data:updateTeamMenbershipDto,
    });
  }

  remove(teamId: string,employeeId:string) {
    return this.prisma.teamMembership.deleteMany({
      where:{teamId,employeeId},
    });
  }
}

import { Injectable } from '@nestjs/common';
import { CreateInterationDto} from "./dto/create-interaction.dto"
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InteractionService {
  constructor(private readonly prisma:PrismaService) {}
async create(dto: CreateInterationDto ,UserId:string) {
  let data = { ...dto, UserId };
    return await this.prisma.interaction.create({data})
   }

   async findAllByProjectId(projectId: string) {
    return await this.prisma.interaction.findMany({
      where: {projectId},
      include:{User:true}
    });
  }

  findOne(id: string) {
 return this.prisma.interaction.findUnique({where:{id}});
  }



  remove(id: string) {
    return this.prisma.interaction.delete({where:{id}});
  }
}

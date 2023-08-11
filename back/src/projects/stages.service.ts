import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StagesService {
constructor(private readonly prisma:PrismaService) {}
async createByObjectiveId(objectiveId: string, data: CreateStageDto) {
  try {
    const createdStage = await this.prisma.stage.create({
      data: {
        name: data.name,
        objectiveId: objectiveId // Assuming this is the foreign key in Stage
      },
    });

    return createdStage;
  } catch (error) {
    console.error("Error creating stage:", error);
    throw error;
  }
}



  async findAllByObjectiveId(objectiveId: string) {
    return await this.prisma.stage.findMany({
      where :{objectiveId},
      include:{project:true}

    
    });
  }

  findOne(id: string) {
    return this.prisma.stage.findUnique({where:{id}});
  }

async  update(id: string, data: UpdateStageDto) {
    return await this.prisma.stage.update({
      data:{
        name:data.name,},
        where:{id:id}
    });
  }

 async remove(id: string) {
    return await this.prisma.stage.delete({where:{id}});
  }
}

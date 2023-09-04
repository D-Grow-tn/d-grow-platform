import { Injectable } from '@nestjs/common';
import { CreateStageDto } from './dto/create-stage.dto';
import { UpdateStageDto } from './dto/update-stage.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StagesService {
  constructor(private readonly prisma: PrismaService) {}

  async createStage(data: CreateStageDto): Promise<any> {
    try {
      const createdStage = await this.prisma.stage.create({
        data: {
          name: data.name,
          startAt: data.startAt,
          endAt: data.endAt,
          objectiveId:data.objectiveId,
        },
      });
  
      console.log('Stage created:', createdStage);
      return createdStage;
    } catch (error) {
      console.error('Error creating stage:', error);
      throw error;
    }
  }
  
  async findStagesByWeek() {
    try {
      var curr = new Date(); // get current date
      var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
      var last = first + 6; // last day is the first day + 6

      var firstday = new Date(curr.setDate(first));
      var lastday = new Date(curr.setDate(last));
      console.log(firstday, lastday);

      const stages = await this.prisma.stage.findMany({
        where: {
          OR: [
            
           
                {
                  startAt: {
                    lte: lastday,
                  },
                  endAt:{gte:firstday}
                },
                
                {
                  startAt: {
                    gte: firstday,
                  },
                  endAt:{lte:lastday}
                },
               
            
              
                  {
                    AND: [
                      {
                        startAt: {
                          lte: firstday,
                        },
                      },
                      {
                        endAt: {
                          gte: firstday,
                          lte: lastday,
                        },
                      },
                    ],
                  },
                  {
                    AND: [
                      {
                        startAt: {
                          gte: firstday,
                          lte:lastday,
                        },
                      },
                      {
                        endAt: {
                         
                          gte: lastday,
                        },
                      },
                    ],
                  },
              ],
          
          
        },
        include: {
          project: true,
        },
      });
      console.log('Stages:', stages);

      return stages;
    } catch (error) {
      console.error('Error retrieving stages by week:', error);
      throw new Error('An error occurred while retrieving stages.');
    }
  }

  findOne(id: string) {
    return this.prisma.stage.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateStageDto) {
    return await this.prisma.stage.update({
      data: {
        name: data.name,
      },
      where: { id: id },
      include: {
        Stage: {
          orderBy: {
            updatedAt: 'asc',
          },
        },
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.stage.delete({ where: { id } });
  }
}

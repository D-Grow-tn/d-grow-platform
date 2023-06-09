import { Injectable } from '@nestjs/common';
import { CreateDecisionDto } from './dto/create-decision.dto';
import { UpdateDecisionDto } from './dto/update-decision.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class DecisionsService {
  constructor(private readonly prisma: PrismaService) {}
 async  create(createDecisionDto: CreateDecisionDto) {
  return await  this.prisma.decision.create({
    data:createDecisionDto,
  });
  }

 async findAll() {
     return await this.prisma.decision.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.decision.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updateDecisionDto: UpdateDecisionDto) {
    return await 
    this.prisma.decision.update({
      where: { id },
      data: updateDecisionDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.decision.delete({ where: { id } });

  }
}
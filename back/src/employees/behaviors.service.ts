import { Injectable } from '@nestjs/common';
import { CreateBehaviorDto } from './dto/create-behavior.dto';
import { UpdateBehaviorDto } from './dto/update-behavior.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BehaviorsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBehaviorDto: CreateBehaviorDto) {
    return await this.prisma.behavior.create({
      data: createBehaviorDto,
    });
  }

  async findAll() {
    return await this.prisma.behavior.findMany({
      include:{
        sender:true, reciever:true
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.behavior.findFirst({
      where: {
        id,
      },
    });
  }

  async findAllByReceiver(recieverId:string){
    return  await this.prisma.behavior.findMany({ 
      where:{recieverId}
    })
  }

async findAllBySender(senderId:string){
  return  await this.prisma.behavior.findMany({ 
    where:{senderId}
  })
}
  async update(id: string, updateBehaviorDto: UpdateBehaviorDto) {
    return await this.prisma.behavior.update({
      where: { id },
      data: updateBehaviorDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.behavior.delete({ where: { id } });
  }
}

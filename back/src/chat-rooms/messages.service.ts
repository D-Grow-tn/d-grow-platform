import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma:PrismaService){}
  async create(createMessageDto: CreateMessageDto) {
    return await this.prisma.message.create({
      data:createMessageDto
    })
  }

  async findAll() {
    return await this.prisma.message.findMany({
      include:{
        employee:true,
        chatRoom:true,
      }
    })
  }

  async findOne(id: string) {
    return await this.prisma.message.findFirst({
      where:{
        id,
      },
      include:{
        employee:true,
        chatRoom:true,
      }
    });
  }

  async update(id: string, updateMessageDto: UpdateMessageDto) {
    return await this.prisma.message.update({
      where:{
        id
      },data:updateMessageDto,
    })
  }

  async remove(id: string) {
    return await this.prisma.message.delete({
      where:{
        id,
      }
    })
  }
}

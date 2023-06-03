import { Injectable } from '@nestjs/common';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';
import { UpdateChatRoomDto } from './dto/update-chat-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatRoomsService {
  constructor (private readonly prisma:PrismaService){}
  async create(createChatRoomDto: CreateChatRoomDto) {
    return await this.prisma.chatRoom.create({
      data: createChatRoomDto,
    });
  }

  async findAll() {
    return await this.prisma.chatRoom.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.chatRoom.findFirst({
      where:{
        id,
      }
    });
  }

  async update(id: string, updateChatRoomDto: UpdateChatRoomDto) {
    return await this.prisma.chatRoom.update({
      where:{
        id,
      },
      data:updateChatRoomDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.chatRoom.delete({
      where:{
        id,
      }
    })
  }
}

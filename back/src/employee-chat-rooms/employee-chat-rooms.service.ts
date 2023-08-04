import { Injectable } from '@nestjs/common';
import { CreateEmployeeChatRoomDto } from './dto/create-employee-chat-room.dto';
import { UpdateEmployeeChatRoomDto } from './dto/update-employee-chat-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeChatRoomsService {
  constructor(private readonly prisma:PrismaService){}
  async create(createEmployeeChatRoomDto: CreateEmployeeChatRoomDto) {
    return await this.prisma.employeeChatRoom.create({
      data:createEmployeeChatRoomDto,
    });
  }

  async findAll() {
    return await this.prisma.employeeChatRoom.findMany({
      include: {
        chatRoom:true,
        employee:true,
      }
    });
  }

  async findOne(chatRoomId:string, employeeId:string) {
    return await this.prisma.employeeChatRoom.findFirst({
      where:{chatRoomId,employeeId}
    });
  }

  async update(chatRoomId:string, employeeId:string, updateEmployeeChatRoomDto: UpdateEmployeeChatRoomDto) {
    return await this.prisma.employeeChatRoom.updateMany({
      where:{chatRoomId,employeeId},
      data:updateEmployeeChatRoomDto
    });
  }

  async remove(chatRoomId:string, employeeId:string) {
    return await this.prisma.employeeChatRoom.deleteMany({
      where:{chatRoomId,employeeId}
    }) ;
  }
}

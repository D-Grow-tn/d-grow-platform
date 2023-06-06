import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeChatRoomsService } from './employee-chat-rooms.service';
import { CreateEmployeeChatRoomDto } from './dto/create-employee-chat-room.dto';
import { UpdateEmployeeChatRoomDto } from './dto/update-employee-chat-room.dto';

@Controller('employee-chat-rooms')
export class EmployeeChatRoomsController {
  constructor(private readonly employeeChatRoomsService: EmployeeChatRoomsService) {}

  @Post()
  create(@Body() createEmployeeChatRoomDto: CreateEmployeeChatRoomDto) {
    return this.employeeChatRoomsService.create(createEmployeeChatRoomDto);
  }

  @Get()
  findAll() {
    return this.employeeChatRoomsService.findAll();
  }

  @Get(':employeeId/chatRoomId')
  findOne(@Param('employeeId')  @Param('chatRoomId')chatRoomId : string,employeeId:string) {
    return this.employeeChatRoomsService.findOne(employeeId,chatRoomId);
  }

  @Patch(':employeeId/chatRoomId')
  update(@Param('employeeId')  @Param('chatRoomId')chatRoomId : string,employeeId:string, @Body() updateEmployeeChatRoomDto: UpdateEmployeeChatRoomDto) {
    return this.employeeChatRoomsService.update(employeeId,chatRoomId, updateEmployeeChatRoomDto);
  }

  @Delete(':employeeId/chatRoomId')
  remove(@Param('employeeId') @Param('chatRoomId') employeeId: string, chatRoomId:string) {
    return this.employeeChatRoomsService.remove(employeeId,chatRoomId);
  }
}

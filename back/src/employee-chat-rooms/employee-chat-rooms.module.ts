import { Module } from '@nestjs/common';
import { EmployeeChatRoomsService } from './employee-chat-rooms.service';
import { EmployeeChatRoomsController } from './employee-chat-rooms.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EmployeeChatRoomsController],
  providers: [EmployeeChatRoomsService,PrismaService]
})
export class EmployeeChatRoomsModule {}

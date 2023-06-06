import { Module } from '@nestjs/common';
import { ChatRoomsService } from './chat-rooms.service';
import { ChatRoomsController } from './chat-rooms.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ChatRoomsController],
  providers: [ChatRoomsService,PrismaService]
})
export class ChatRoomsModule {}

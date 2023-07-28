import { Module } from '@nestjs/common';
import { ChatRoomsService } from './chat-rooms.service';
import { ChatRoomsController } from './chat-rooms.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatGateway } from './chat.gateway';

@Module({
  controllers: [ChatRoomsController],
  providers: [ChatRoomsService,PrismaService,ChatGateway]
})
export class ChatRoomsModule {}

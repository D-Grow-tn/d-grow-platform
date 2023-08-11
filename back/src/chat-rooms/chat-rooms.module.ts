import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

import { Module } from '@nestjs/common';
import { ChatRoomsService } from './chat-rooms.service';
import { ChatRoomsController } from './chat-rooms.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChatGateway } from './chat.gateway';


@Module({
  controllers: [ChatRoomsController,MessagesController],
  providers: [ChatRoomsService,PrismaService,ChatGateway,MessagesService]
})
export class ChatRoomsModule {}

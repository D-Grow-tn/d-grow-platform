import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
// import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesService } from './messages.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  users = [];
  message = [];
  constructor(private readonly messagesService: MessagesService) {}
  @WebSocketServer() server: Server;
  // private logger: Logger = new Logger('ChatGateway');

  @SubscribeMessage('connection')
  async connect(client: Socket, data: string) {
    // console.log('===============' + data + ' ==================');
    if (!this.users.includes(data)) this.users.push(data);
    setTimeout(() => {
      this.users = this.users.filter((elem) => elem !== data);
      this.server.emit(`disconnect/${data}`);
      this.server.emit('list-users', this.users);
    }, 1000 * 10);
    this.server.emit('list-users', this.users);
  }

  @SubscribeMessage('message')
  async handleMessage(client: Socket, data: CreateMessageDto) {
    const newMessge = await this.messagesService.create(data);
    const { id } = newMessge;
    const oneMessage = await this.messagesService.findOne(id);
    this.server.emit('OneMessage', oneMessage);
    return newMessge;
  }
}

import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
// import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  users = [];
  message=[]
  constructor() {}
  @WebSocketServer() server: Server;
  // private logger: Logger = new Logger('ChatGateway');

  @SubscribeMessage('connection')
  async connect(client: Socket, data: string) {
    // console.log('===============' + data + ' ==================');
    if (!this.users.includes(data)) this.users.push(data);
    setTimeout(() => {
     this.users=this.users.filter(elem=>elem!==data)
      this.server.emit(`disconnect/${data}`);
      this.server.emit('list-users', this.users);
    }, 1000 * 10);
    this.server.emit('list-users', this.users);
  }
  
  
  @SubscribeMessage('message') 
  handleMessage(client: Socket, data: any) {
        console.log(data,"message")
     if (!this.message.includes(data))this.message.push(data)
      this.server.emit("messagetlkol",this.message)
  }
  
}

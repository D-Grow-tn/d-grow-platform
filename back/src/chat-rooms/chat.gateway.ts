import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
// import { Socket, Server } from 'socket.io';



@WebSocketGateway({
  namespace: 'events' ,
  cors: {
    origin: '*',
  },
},)
export class ChatGateway {
  private typingUsers: { [userId: string]: boolean } = {};
  constructor(
    
  ) {}

  // @WebSocketServer() server: Server;
  private logger: Logger = new Logger('ChatGateway');

  @SubscribeMessage('connection')
  async connect() {
    
  }



  

 


 

  
}

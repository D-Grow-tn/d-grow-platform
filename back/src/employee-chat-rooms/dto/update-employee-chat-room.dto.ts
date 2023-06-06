import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeChatRoomDto } from './create-employee-chat-room.dto';

export class UpdateEmployeeChatRoomDto extends PartialType(CreateEmployeeChatRoomDto) {}

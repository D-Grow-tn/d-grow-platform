import { ApiProperty } from "@nestjs/swagger";
import { ChatGroupType } from "@prisma/client";

export class CreateChatRoomDto {
  @ApiProperty({ required: true })
  title: string;
  @ApiProperty({ required: true })
  type: ChatGroupType;
}

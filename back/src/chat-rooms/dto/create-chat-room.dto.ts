import { ApiProperty } from "@nestjs/swagger";

export class CreateChatRoomDto {
  @ApiProperty({ required: true })
  content: string;
}

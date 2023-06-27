import { ApiProperty } from "@nestjs/swagger";
export class CreateBehaviorDto {
  @ApiProperty()
  content: string;
  @ApiProperty()
  senderId: string;
  @ApiProperty()
  receiverId: string;
}

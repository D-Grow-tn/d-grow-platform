
import { ApiProperty } from "@nestjs/swagger";
export class CreateRequestDto {
  @ApiProperty()
  subject: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  senderId: string;
  @ApiProperty()
  receiverId: string;
  @ApiProperty()
  mediaIds: string[];
 
  
}

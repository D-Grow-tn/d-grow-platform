
import { ApiProperty } from "@nestjs/swagger";
export class CreateRequestDto {
  @ApiProperty()
  subject: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  employeeId: string;
  @ApiProperty()
  mediaIds: string[];
 
  
}

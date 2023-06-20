import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEmpty, IsNotEmpty} from "class-validator";

export class CreateEventDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  startAt : Date;
  @ApiProperty()
  endAt :Date;
  @ApiProperty()
  @IsNotEmpty()
  employeeId: string;
  @ApiProperty()
  membershipIds:string[]
  @ApiProperty()
  //@IsEmpty()
  mediaIds:string[]

}

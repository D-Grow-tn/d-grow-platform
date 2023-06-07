import { ApiProperty } from "@nestjs/swagger";

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
  employeeId: string;
  @ApiProperty()
  membershipIds:string[]
  @ApiProperty()
  mediaIds:string[]

}

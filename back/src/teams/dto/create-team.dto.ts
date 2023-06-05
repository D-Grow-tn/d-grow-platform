import { ApiProperty } from "@nestjs/swagger";

export class CreateTeamDto {
  @ApiProperty({ required: true })
  name: string;
}

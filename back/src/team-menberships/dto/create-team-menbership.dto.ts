import { ApiProperty } from "@nestjs/swagger";
export class CreateTeamMenbershipDto {
  @ApiProperty({ required: true })
  teamId: string;
  @ApiProperty({ required: true })
  employeeId: string;
}

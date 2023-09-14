import { ApiProperty } from "@nestjs/swagger";

export class CreateObjectiveDto {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  decription: string;
  @ApiProperty({ required: true })
  projectId: string;
}

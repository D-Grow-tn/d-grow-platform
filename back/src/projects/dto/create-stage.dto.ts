import { ApiProperty } from "@nestjs/swagger";

export class CreateStageDto {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  objectiveId : string;
  @ApiProperty({ required: true })
  startAt : Date;
  @ApiProperty({ required: true })
  endAt : Date;
}

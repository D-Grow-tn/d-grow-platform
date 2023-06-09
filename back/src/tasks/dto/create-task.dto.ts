import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
  @ApiProperty({ required: true })
  points: number;
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  duration: string;
  @ApiProperty({ required: true })
  level: string;
  @ApiProperty({ required: true })
  stageId: string;
  @ApiProperty({ required: true })
  employeeId: string;
}

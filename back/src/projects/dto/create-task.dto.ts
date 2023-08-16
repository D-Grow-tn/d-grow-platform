import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
  @ApiProperty({ required: false })
  points: number;
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: false })
  duration: string;
  @ApiProperty({ required: false })
  level: string;
  @ApiProperty({ required: false })
  stageId: string;
  @ApiProperty({ required: false })
  employeeId: string;
}

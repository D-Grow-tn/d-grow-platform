import { ApiProperty } from "@nestjs/swagger";

export class CreateStageDto {
  @ApiProperty({ required: true })
  name: string;
}

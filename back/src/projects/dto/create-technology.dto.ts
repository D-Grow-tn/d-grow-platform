import { ApiProperty } from "@nestjs/swagger";
export class CreateTechnologyDto {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  description: string;
}

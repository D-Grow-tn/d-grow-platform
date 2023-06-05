import { ApiProperty } from "@nestjs/swagger";
export class CreateTestDto {
  @ApiProperty({ required: true })
  title: string;
  @ApiProperty({ required: true })
  content: string;
  @ApiProperty({ required: true })
  correction: string;
  @ApiProperty({ required: true })
  score: number;
}

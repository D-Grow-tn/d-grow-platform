import { ApiProperty } from "@nestjs/swagger";

export class CreateDepartmentDto {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  description: string;
  @ApiProperty({ required: true })
  headDepartmentId: string;
}

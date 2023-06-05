import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDto {
  @ApiProperty({ required: true })
  name: string;
  @ApiProperty({ required: true })
  description: string;
  @ApiProperty({ required: true })
  duration: string;
  @ApiProperty({ required: false })
  clientId: string;
  @ApiProperty({ required: false })
  teamId: string;
  @ApiProperty({ required:false })
  projectManagerId: string;
  @ApiProperty({ required: false })
  consultantId: string;
  @ApiProperty({ required: false })
  coverId: string;
}

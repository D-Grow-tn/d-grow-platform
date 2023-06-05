import { ApiProperty } from "@nestjs/swagger";

export class CreateInterationDto {
    @ApiProperty({ required: true })
    content: string;
    @ApiProperty({ required: true })
    projectId: string;
   
  }
  
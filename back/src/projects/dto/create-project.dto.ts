import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  description: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  duration: string;
  @ApiProperty({ required: false })
  clientId: string;
  @ApiProperty({ required: false })
  teamId: string;
  @ApiProperty({ required: false })
  projectManagerId: string;
  @ApiProperty({ required: false })
  consultantId: string;
  @ApiProperty({ required: false })
  coverId: string;
  @ApiProperty({ required: false })
  projectTechnologyIds: string[];
}

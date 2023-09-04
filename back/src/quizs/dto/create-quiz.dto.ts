import { ApiProperty } from "@nestjs/swagger";

export class CreateQuizDto {
  @ApiProperty({ required: true })
  content: string;
  @ApiProperty({ required: true })
  score: number
  @ApiProperty()
  QuestionQuizIds :string[]
  @ApiProperty()
  EmployeeQuizIds: string[]
  
}

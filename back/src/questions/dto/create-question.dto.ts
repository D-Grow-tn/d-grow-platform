import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionDto {
  @ApiProperty({ required: true })
  text : string
  @ApiProperty()
  OptionQuestionIds : string []
    
}

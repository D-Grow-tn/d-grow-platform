import { ApiProperty } from "@nestjs/swagger";

export class CreateAnswerDto {
    @ApiProperty({required:true})
    text :string
    @ApiProperty({required:true})
    CorrectAnswer:boolean
}

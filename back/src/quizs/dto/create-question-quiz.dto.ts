import { ApiProperty } from "@nestjs/swagger";

export class CreateQuestionQuizDto {
    @ApiProperty({required:true})
    questionId:string
    @ApiProperty({required:true})
    quizId : string
    @ApiProperty({required:true})
    score:number
}

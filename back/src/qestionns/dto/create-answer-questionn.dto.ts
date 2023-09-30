import { ApiProperty } from "@nestjs/swagger";

export class CreateAnswerQuestionnDto {
    @ApiProperty({required:true})
    questionnId : string
    @ApiProperty({required:true})
    answerId:string
}

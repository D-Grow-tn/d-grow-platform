import { ApiProperty } from "@nestjs/swagger"

export class CreateOptionquestionDto {
    @ApiProperty({required:true})
    questionId:string
    @ApiProperty({required:true})
    optionId : string
    
}

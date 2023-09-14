import { ApiProperty } from "@nestjs/swagger";

export class CreateOptionDto {
    @ApiProperty({required:true})
    content:string
    @ApiProperty({required:true})
    correctOption:boolean
}

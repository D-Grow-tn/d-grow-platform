import { ApiProperty } from "@nestjs/swagger";

export class CreateParagraphDto {
    @ApiProperty({required:true})
    content:string;
    @ApiProperty({required:true})
    sectionId:string;
}

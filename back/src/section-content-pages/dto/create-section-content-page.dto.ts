import { ApiProperty } from "@nestjs/swagger";

export class CreateSectionContentPageDto {
    @ApiProperty({required:true })
    sectionId:string
    @ApiProperty({required:true })
    contentPageId:string
}

import { ApiProperty } from "@nestjs/swagger";
import { ContentType } from "@prisma/client";

export class CreateContentSubComponentDto {
    @ApiProperty({required:true})
    title :string
    @ApiProperty({required:false})
    navigateTo: string
    @ApiProperty({required:true})
    content: string
    @ApiProperty({required:true})
    subComponentId:string
    @ApiProperty({required:true})
    type:ContentType
    @ApiProperty({required:true})
    previousContentSubComponent:any
}

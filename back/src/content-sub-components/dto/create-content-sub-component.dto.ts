import { ApiProperty } from "@nestjs/swagger";

export class CreateContentSubComponentDto {
    @ApiProperty({required:true})
    title :string
    @ApiProperty({required:false})
    navigateTo: string
    @ApiProperty({required:true})
    content: string
    @ApiProperty({required:true})
    subComponentId:string
}

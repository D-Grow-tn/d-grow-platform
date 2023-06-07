import { ApiProperty } from "@nestjs/swagger";

export class CreateContentPageDto {
 @ApiProperty({required:true}) 
 title:string;
 @ApiProperty({required:true}) 
 pageId:string;
}

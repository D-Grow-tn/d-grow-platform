import { ApiProperty } from "@nestjs/swagger";

export class CreateButtonDto {
    @ApiProperty({required:true})
    label:string;
    @ApiProperty({required:true})
    url:string;
    @ApiProperty({required:true})
    sectionId:string;

}

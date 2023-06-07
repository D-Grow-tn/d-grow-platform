import { ApiProperty } from "@nestjs/swagger";

export class CreatePageDto {
    @ApiProperty({required:true })
    title:string;
    @ApiProperty({required:true })
    slug: string;
    
    

}

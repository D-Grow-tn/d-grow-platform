import { ApiProperty } from "@nestjs/swagger";

export class CreateSectionDto {
    @ApiProperty({required:true}) 
    name:string
   }

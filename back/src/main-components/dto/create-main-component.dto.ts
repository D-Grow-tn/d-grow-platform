import { ApiProperty } from "@nestjs/swagger";
import { TypeMainComponent } from "@prisma/client";

export class CreateMainComponentDto {
    @ApiProperty({required:false})
    title : string
    @ApiProperty({required:false})
    path : string
    @ApiProperty({required:true})
    type: TypeMainComponent
   


}

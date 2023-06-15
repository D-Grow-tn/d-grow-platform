import { ApiProperty } from "@nestjs/swagger";
import { PositionSubComponent } from "@prisma/client";

export class CreateSubComponentDto {
    @ApiProperty({required:false})
    name: string
    @ApiProperty({required:true})
    mainId: string
    @ApiProperty({required:true})
    position : PositionSubComponent
}

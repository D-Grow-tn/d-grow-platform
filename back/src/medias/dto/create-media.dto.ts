import { ApiProperty } from "@nestjs/swagger"

export class CreateMediaDto {
    @ApiProperty({ required: true })
    path:string
    @ApiProperty({ required: true })
    type:string
    @ApiProperty({ required: false })
    alt:string
    @ApiProperty({ required: true })
    extension:string
    @ApiProperty({ required: false })
    description:string
   
}

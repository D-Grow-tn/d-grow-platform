import { ApiProperty } from "@nestjs/swagger";

export class CreateProvideDto {
    @ApiProperty({ required: true })
    name:string
    @ApiProperty({ required: true })
    description:string
    @ApiProperty({ required: true })
    email:string
    @ApiProperty({ required: true })
    phone:string
}

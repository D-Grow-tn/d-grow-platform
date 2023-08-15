import { ApiProperty } from "@nestjs/swagger";

export class CreateDeviDto {
@ApiProperty()
discreption:string
@ApiProperty()
price : string 
// @ApiProperty() // This specifies an array of client IDs
// client: string[];
}

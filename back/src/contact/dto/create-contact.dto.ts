import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsEmpty } from "class-validator";
export class CreateContactDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    email:string;
    @ApiProperty()
    subject:string;
    @ApiProperty()
    message:string;

}
 
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class User {}
export class UserSignin {
    @ApiProperty()
    @IsNotEmpty ()  email:string;
    @ApiProperty()
    @IsNotEmpty ()  userPassword:string;
}

import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class User {}
export class UserLogin {
    @ApiProperty()
    @IsNotEmpty ()  email:string;
    @ApiProperty()
    @IsNotEmpty ()  password:string;
}

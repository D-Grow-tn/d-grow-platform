import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class User {}
export class UserLogin {
    @ApiProperty()
    @IsNotEmpty ()  email:string;
    @ApiProperty()
    @IsNotEmpty ()  password:string;
}
export class UpdatePasswordDto {

    @IsNotEmpty()
    @ApiProperty() new_password: string;

    @IsNotEmpty()
    @ApiProperty() old_password: string;

}
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { FormatSignin, UsersService } from  'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from "src/prisma/prisma.service";
import { User } from "@prisma/client";
import { JwtPayload } from "./jwt.strategy";
import { UserSignin } from "src/users/entities/user.entity";
@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ) {}
  async  signup(userDTO:CreateUserDto): Promise<SignUpStatus> {
        let status:SignUpStatus = {
            success:true,
            message:'ACCOUNT_CREATE_SUCCESS',
        };
        try {
          await this.usersService.create(userDTO);
        } catch (error) {
            status = {
                success:false,
                message:'ACCOUNT_CREATE_ERROR',
            }
        };
        return status;
    }

   async signin(signinUserDTO:UserSignin): Promise<any> {
        // find user in db
        const user = await this.usersService.findBySignin(signinUserDTO);
        // generate and sign token
        const token = this._createToken(user);
        return token;
    }



    private _createToken(args:FormatSignin): any {
        const user: FormatSignin = args;
        const Authorization = this.jwtService.sign(user);
        return {
          expiresIn: process.env.EXPIRESIN,
          Authorization,
        };
      }

      async validateUser(payload:JwtPayload): Promise<any> {
        const user = await this.usersService.findByPayload(payload);
        if (!user) {
          throw new HttpException('INVALID_TOKEN', HttpStatus.UNAUTHORIZED);
        }
        return user;
      }

      async me(token: string) {
        const payload = this.jwtService.decode(token, {}) as any;
        return new Promise((resolve, reject) => {
          resolve(payload);
        });
      }
}

export interface SignUpStatus {
    success: boolean;
    message: string;
    data?:User;
}


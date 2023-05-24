import { HttpException, HttpStatus, Injectable, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UserLogin } from "src/users/entities/user.entity";
import { FormatLogin, UsersService } from "src/users/users.service";
import { JwtPayload } from "./jwt.strategy";
import { ApiSecurity } from "@nestjs/swagger";
import { JwtAuthGuard } from "./jwt-auth.guard";



@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}


 
  async register(Dto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'ACCOUNT_CREATE_SUCCESS',
    };

    try {
      status.data = await this.usersService.create(Dto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }
    return status;


  }
 
  async login(dto:UserLogin): Promise<any> {
    const user = await this.usersService.findByLogin(dto);
    const token = this._createToken(user)
    return token;
    
  }

  private _createToken(args: FormatLogin): any {
    const user: FormatLogin = args;
    const Authorization = this.jwtService.sign(user);
    return {
      expiresIn: process.env.EXPIRESIN,
      Authorization,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
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
export interface RegistrationStatus {
  success: boolean;
  message: string;
  data?: User;
}
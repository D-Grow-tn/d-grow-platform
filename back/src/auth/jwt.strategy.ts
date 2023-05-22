import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {AuthService} from "./auth.service";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest:   
            ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: process.env.SECRETKEY,
            
        });
    }

    async validate(payload: JwtPayload): Promise<any> {
        const user = await this.authService.validateUser(payload);
        if (!user) {
            throw new HttpException('Invalid token', 
                HttpStatus.UNAUTHORIZED);
        }
        const {password, ...rest}=user;
        return rest;
    }

}
export interface JwtPayload {
  name: string
  email: string
  clientId: string
  employeeId: string
  mediaId: string
}

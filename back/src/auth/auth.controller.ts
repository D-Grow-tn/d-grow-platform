import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { AuthService, SignUpStatus } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserSignin } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

 @Post('signUp')
  public async  signUp(
 @Body() createUserDto: CreateUserDto,
  ): Promise<SignUpStatus> {
    const result: SignUpStatus =await this.authService.signup(
        createUserDto,
    )
    if (!result.success) {
        throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
      }
      return result;
  }

  @Post('signIn')
  public async signin(@Body()signinUserDto:UserSignin): Promise<any> {
    return await this.authService.signin(signinUserDto);
  }

  @ApiSecurity('apikey')
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(req){
    try{
        if (!req.get('Authorization')) {
            throw new Error('Missing Authorization header');
          }
          return await this.authService.me(
            req.get('Authorization').replace('Bearer ', ''),
          );
    } catch (e) {
        console.log('error', e);
        throw new BadRequestException(e.message);
      }
  }
}

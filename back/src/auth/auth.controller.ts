import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { UserLogin } from 'src/users/entities/user.entity';
import { JwtAuthGuard } from './jwt-auth.guard';
import { CurrentUser } from './decorators/currentUser';
import { UpdateAuthDto } from './dto/update-auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() createUserDto: CreateUserDto): Promise<any> {
    const result = await this.authService.register(createUserDto);
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('login')
  public async login(@Body() Dto: UserLogin): Promise<any> {
    return await this.authService.login(Dto);
  }
  @ApiSecurity('apiKey')
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@Request() req) {
    try {
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

  
  @Post('forgot-password')
  forgotPassword(@Body() body: any) {
    return this.authService.forgotPassword(body.email);
  }

  @Post('verification-code')
  verificationCode(@Body() body: any) {
    return this.authService.verificationCode(body.code, body.email);
  }

  @ApiSecurity('apiKey')
  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  changePassword(@CurrentUser() user: any, @Body() body: UpdateAuthDto) {
    return this.authService.changePassword(
      user.email,
      body.password,
      body.confirmPassword,
    );
  }
}

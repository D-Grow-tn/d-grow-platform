import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { UserLogin } from "src/users/entities/user.entity";
import { JwtAuthGuard } from "./jwt-auth.guard";




@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(
    @Body() createUserDto: CreateUserDto,
  ): Promise<any> {
    const result = await this.authService.register(
      createUserDto,
    );
    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Post('login')
  public async login(@Body() Dto: UserLogin): Promise<any> {
    return await this.authService.login(Dto);
  }

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


}
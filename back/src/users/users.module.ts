import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; 
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService,AuthService,JwtService,PrismaService,],
 
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; 
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';


@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService,AuthService,JwtService,PrismaService,MailService],
  exports: []
})
export class UsersModule {}

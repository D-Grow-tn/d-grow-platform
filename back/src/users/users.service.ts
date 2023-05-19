import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'
import { User } from '@prisma/client';
import { UserSignin } from './entities/user.entity';

export interface FormatSignin extends Partial<User>
{
  id: string;
  name: string;
  email: string;
  clientId: string ;
  employeeId: string ;
  isClient: boolean;
  mediaId: string ;
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateUserDto) {
    const salt = await bcrypt.genSalt();
     data.password = await bcrypt.hash(data.password, salt);
    return await this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.user.findMany({})
  }

 async findOne(id: string) {
    return await this.prisma.user.findUniqueOrThrow({
      where: {
        id:id
      },
    });
  }

 async update(id: string, data: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }
  

  async remove(id: string) {
    return await this.prisma.user.delete({ where: { id } });
  }


  async findBySignin({email,userPassword}:UserSignin): Promise<FormatSignin>{
    const user = await this.prisma.user.findFirst({
      where: { email },
      include:{client:true,employee:true}
  });
  if(!user){
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    }
    const isMatch = await bcrypt.compare(userPassword, user.password);
    if(!isMatch){
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    const {password,...rest } = user;
    return rest;
  }


  async findByPayload({ email }: any): Promise<any> {
    let user = {}
    user = await this.prisma.user.findFirstOrThrow({
      where: { email },
    });
    return user

  }
}

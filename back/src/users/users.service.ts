import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

import { UpdateUserDto } from './dto/update-user.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

import { User } from '@prisma/client';
import { UserLogin } from './entities/user.entity';

export interface FormatLogin extends Partial<User> {
  id: string;
  name: string;
  email: string;
  clientId: string;
  employeeId: string;
  isClient: boolean;
  mediaId: string;
}

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    data.password = await bcrypt.hash(data.password, salt);

    return this.prisma.user.create({
      data,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }


  findOne(id: string) {
    return this.prisma.user.findUniqueOrThrow({ where: { id: id } });
  }

  update(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: { ...data },
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  async findByLogin({ email, password }: UserLogin): Promise<FormatLogin> {
    const user = await this.prisma.user.findFirst({
      where: { email },
      include: {
        client: {
          include: { avatar: true },
        },
        employee: true,
        interaction: true,
        Media: true,
      },
    });

    if (!user) {
      throw new HttpException('invalid_credentials', HttpStatus.BAD_REQUEST);
    }
    const areEqual = await bcrypt.compare(password, user.password);

    if (!areEqual) {
      throw new HttpException('invalid_credentials', HttpStatus.BAD_REQUEST);
    }

    const { password: p, ...rest } = user;
    return rest;
  }

  async findByPayload({ email }: any): Promise<any> {
    let user = {};
    user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (!user)
      throw new HttpException('invalid_credentials', HttpStatus.BAD_REQUEST);
    return user;
  }
}

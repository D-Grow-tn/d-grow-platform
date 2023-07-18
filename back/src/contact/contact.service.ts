import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class ContactService {
  constructor(private readonly prisma : PrismaService) {}
  async create(createContactDto: CreateContactDto) {
    return await this.prisma.contact.create({
      data : createContactDto,
    });
  }

  async findAll() {
    return await this.prisma.contact.findMany({});
  }

  async findOne(id : string) {
    return await this.prisma.contact.findFirst({
      where:{
        id,
      },
    });
  }


  async remove(id: string) {
    return await this.prisma.contact.delete({
      where:{id},
    }
    );
  }
}

import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';


@Injectable()
export class ContractService {
  constructor(private readonly prisma : PrismaService){}
  async create(createContractDto: CreateContractDto) {
    return await this.prisma.contract.create({
      data:createContractDto,
    })
  }

  async findAll() {
    return await this.prisma.contract.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.contract.findUnique({where:{id}});
  }

 async  update(id: string, updateContractDto: UpdateContractDto) {
    return await this.prisma.contract.update({
      where:{id},
       data:updateContractDto
    }) ;
  }

 async remove(id: string) {
    return await this.prisma.contract.delete({
      where:{id}
    });
  }
}

import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateContractDto } from './dto/create-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';


@Injectable()
export class ContractService {
  constructor(private readonly prisma : PrismaService){}
  async create(createContractDto: CreateContractDto) {
    try {
      const createdContract = await this.prisma.contract.create({
        data: createContractDto,
      });

      return createdContract;
    } catch (error) {
      // Handle the error appropriately
      throw new Error(`Error creating contract: ${error.message}`);
    }
  }

  async findAll() {
    return await this.prisma.contract.findMany({
      include:{
        client:true,
        project:true,
      }
    });
  }

  async findOne(id: string) {
    return await this.prisma.contract.findUnique({
      where:{id},
      include:{
        client:true,
         project:true,
      }
    
    });
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

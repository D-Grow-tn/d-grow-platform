import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';

@Module({
  controllers: [ContractController],
  providers: [ContractService,PrismaService]
})
export class ContractModule {}

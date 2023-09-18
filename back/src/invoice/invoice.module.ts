import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService,PrismaService]
})
export class InvoiceModule {}

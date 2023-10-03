import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    console.log(createInvoiceDto,'createInvoiceDto')
    try {
      const createdInvoice = await this.prisma.invoice.create({
        data: {
          // ...createInvoiceDto,
          clientId: createInvoiceDto.clientId,
          total: createInvoiceDto.total,
          // item: {
          //   // Create items within the invoice
          //   create: createInvoiceDto.item.map((itemDto) => ({
          //     name: itemDto.name,
          //     description: itemDto.description,
          //     tax: itemDto.tax,
          //     amount: itemDto.amount,
          //   }
          //   )),
          // },
        },
      });

      return createdInvoice;
  
    } catch (error) {
      throw new Error(`Error creating Invoice: ${error.message}`);
    }
  }
  // async create(createInvoiceDto: CreateInvoiceDto) {
  //   try {
  //     const invoiceData = {
  //       ...createInvoiceDto,
  //       total: createInvoiceDto.total || null, // Use null or provide a default value as needed
  //     };
  
  //     if (createInvoiceDto.item) {
  //       invoiceData.item = {
  //         create: createInvoiceDto.item.map((itemDto) => ({
  //           name: itemDto.name,
  //           description: itemDto.description,
  //           tax: itemDto.tax,
  //           amount: itemDto.amount,
  //         })),
  //       };
  //     }
  
  //     const createdInvoice = await this.prisma.invoice.create({
  //       data: invoiceData,
  //     });
  
  //     return createdInvoice;
  //   } catch (error) {
  //     throw new Error(`Error creating Invoice: ${error.message}`);
  //   }
  // }
  

  async findAll() {
    try {
      const allInvoice = await this.prisma.invoice.findMany({
        include: {
          item: true,
          Client: true,
        },
      });
      return allInvoice;
    } catch (error) {
      throw new Error(`Error finding Invoice: ${error.message}`);
    }
  }

  async findOne(id: string) {
    try {
      const findOneInvoice = await this.prisma.invoice.findFirst({
        where: { id },
        include: {
          item: true,
          Client: true,
        },
      });
      return findOneInvoice;
    } catch (error) {
      throw new Error(`Error finding Invoice: ${error.message}`);
    }
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
  console.log(updateInvoiceDto,'updateInvoiceDto')
    try {
     
      const updateInvoice = await this.prisma.invoice.update({
        where: { id },
        data: {
          clientId: updateInvoiceDto.clientId,
          total:updateInvoiceDto.total?.toString(),
        },
      });
      return updateInvoice;
    } catch (error) {
      throw new Error(`Error updating Invoice: ${error.message}`);
    }
  }
  

  async remove(id: string) {
    try {
      const removeInvoice = await this.prisma.invoice.delete({
        where: { id },
      });
      return removeInvoice;
    } catch (error) {
      throw new Error(`Error deleteing Invoice: ${error.message}`);
    }
  }
}

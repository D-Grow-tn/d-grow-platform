import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    try {
      const createdInvoice = await this.prisma.invoice.create({
        data: {
          ...createInvoiceDto,
          total: createInvoiceDto.total,
          item: {
            // Create items within the invoice
            create: createInvoiceDto.item.map((itemDto) => ({
              name: itemDto.name,
              description: itemDto.description,
              tax: itemDto.tax,
              amount: itemDto.amount,
            })),
          },
        },
      });

      return createdInvoice;
    } catch (error) {
      throw new Error(`Error creating Invoice: ${error.message}`);
    }
  }

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
    console.log(updateInvoiceDto, "=======");
  
    try {
//       const oneInvoice = await this.findOne(id)
//       console.log(oneInvoice,"oneInvoice");
//       // const itemId= oneInvoice.item.forEach((elem)=>elem.id)
//       let itemId;

// for (const item of oneInvoice.item) {
//   itemId = item.id;
//   // break; // Break out of the loop after getting the first item's ID
// }      
      const updateInvoice = await this.prisma.invoice.update({
        where: { id },
        data: {
          total: updateInvoiceDto.total,
          // item: {
          //   updateMany: updateInvoiceDto.item.map((elem) => ({
          //     where: { id: itemId }, // Assuming each item has an ID
          //     data: {
          //       name: elem.name,
          //       description: elem.description,
          //       tax: elem.tax,
          //       amount: elem.amount,
          //     },
          //   })),
          // },
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

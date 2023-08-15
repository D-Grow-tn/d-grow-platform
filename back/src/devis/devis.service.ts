import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateDeviDto } from './dto/create-devi.dto';
import { UpdateDeviDto } from './dto/update-devi.dto';

@Injectable()
export class DevisService {
  constructor(private readonly prisma :PrismaService){}
 async create(createDeviDto: CreateDeviDto) {
  try{
    return await this.prisma.devis.create({
      data: createDeviDto,
      
    });
  }catch(error){
    throw new Error (`Error creating devis: ${error.message}`)
  }
  }

 async findAll() {
  try{
    return await this.prisma.devis.findMany({
      include:{
        client:true
      }
    });
  }catch(error){
    throw new Error (`Error getingAll devis: ${error.message}`)
  }
  }

  async findOne(id: string) {
    try{
      return await this.prisma.devis.findUnique({
        where:{id},
        include:{
          client:true
        }
      });
    }catch(error){
      throw new Error (`Error getingOne devis: ${error.message}`)
    }
  }

 async update(id: string, updateDeviDto: UpdateDeviDto) {
    try{
      return await this.prisma.devis.update({
        where:{id},
        data:updateDeviDto
      });
    }catch(error){
      throw new Error (`Error updating devis: ${error.message}`)
    }
  }

 async remove(id: string) {
  try{
    return await this.prisma.devis.delete({
      where:{id}
    });
  }catch(error){
    throw new Error (`Error removing devis: ${error.message}`)
  }
  }
}

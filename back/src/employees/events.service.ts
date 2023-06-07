import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, PrismaClient} from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createEventDto: CreateEventDto) {
    const {mediaIds, membershipIds, ...rest } = createEventDto;
    console.log(membershipIds)
    return await this.prisma.event.create({
      data: {
        ...rest,
        Membership: {
          
          
          create: membershipIds.map((id) => {

            return {
              employeeId: id,
            };
          }),
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.event.findMany({
      include: {
        Membership: {
          include: {
            employee: true,
          },
        },
      },
    });
  }
  async findAllByEmployee(employeeId: string) {
    return await this.prisma.event.findMany({
      where: {
        employeeId,
      },
      include: {
        Membership: {
          include: {
            employee: true,
          },
        },
      },
    });
  }

  async findOne(id: string,prisma:Prisma.TransactionClient=this.prisma ) {
    return await prisma.event.findFirst({
      where: {
        id,
      },
      include: {
        Membership: true,
      },
    });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const { mediaIds, membershipIds, ...rest } = updateEventDto;
    return await this.prisma.$transaction(async (prisma)=>{
      const event=await this.findOne(id,prisma)
      event.Membership.forEach(async member=>{
        if(!membershipIds.includes(member.employeeId) ){
          await prisma.membership.delete({where:{
            membership:{employeeId:member.employeeId,eventId:id}
          }})
        }
      })
      return await prisma.event.update({
        where: { id },
        data: {...rest,
          Membership:{connectOrCreate:membershipIds.map((member)=>({
            create:{employeeId:member},
            where:{membership:{employeeId:member,eventId:id}}
          }))}}
      });
    })
    
    
  }

  async remove(id: string) {
   return await this.prisma.$transaction(async (prisma) => {
      await prisma.membership.deleteMany({
        where: {
          eventId: id,
        },
      });
     return await prisma.event.delete({
        where: {
          id,
        },
      });
    });
  }
  
}

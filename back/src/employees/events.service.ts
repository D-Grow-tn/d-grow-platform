import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { HelpersService } from '../helpers/helpers.service.js';

@Injectable()
export class EventsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly helper: HelpersService,
  ) {}
  async create(createEventDto: CreateEventDto) {
    const { mediaIds, membershipIds, ...rest } = createEventDto;
    let data = rest;
    let employee=await this.helper.notFound('employee', 'findUniqueOrThrow', {
      where: { id: data.employeeId },
    });

    if (mediaIds) {
      await this.helper.nestedCreateOrUpdateWithMedia(
        mediaIds,
        data,
        'MediaEvent',
        'create',
        'id',
        'unique',
      );
    }
    if (membershipIds) {
      data['Membership'] = {
        create: membershipIds.map((id) => {
          return {
            employeeId: id,
          };
        }),
      };
    }
    return await this.prisma.event.create({
      data,
      include:{
        employee:true,
     
      MediaEvent:{include:{media:true}},

      }
    });
  }

  async findAll() {
    return await this.prisma.event.findMany({
      include: {
        employee:true,
        Membership: {
          include: {
            employee: true,
          },
        },
        MediaEvent: {
          include: {
            media: true,
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
        MediaEvent: true,
      },
    });
  }

  async findOne(id: string, prisma: Prisma.TransactionClient = this.prisma) {
    return await prisma.event.findFirst({
      where: {
        id,
      },
      include: {
        employee:true,
        Membership: true,
        MediaEvent:{include:{media:true}}
      },
    });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const { mediaIds, membershipIds, ...rest } = updateEventDto;
    let data = { ...rest };
    return await this.prisma.$transaction(async (prisma) => {
      const event = await this.findOne(id, prisma);
      event.Membership.forEach(async (member) => {
        if (!membershipIds.includes(member.employeeId)) {
          await prisma.membership.delete({
            where: {
              membership: { employeeId: member.employeeId, eventId: id },
            },
          });
        }
      });
      await this.helper.notFound('mediaId', 'findFirstOrThrow', {
        where: { id: rest.employeeId },
      });
      return await this.prisma.$transaction(async (prisma) => {
        if (mediaIds) {
          let event = await this.findOne(id, prisma);
          event.MediaEvent.forEach(async (elem) => {
            if (!mediaIds.includes(elem.mediaId)) {
              await prisma.mediaEvent.delete({
                where: {
                  eventMedia: { mediaId: elem.mediaId, eventId: id },
                },
              });
            }
          });

          await this.helper.nestedCreateOrUpdateWithMedia(
            mediaIds,
            data,
            'MediaEvent',
            'update',
            id,
            'eventMedia',
          );
        }
        return await prisma.event.update({
          where: { id },
          data: {
            ...rest,
            Membership: {
              connectOrCreate: membershipIds.map((member) => ({
                create: { employeeId: member },
                where: { membership: { employeeId: member, eventId: id } },
              })),
            },
          },
          include: { MediaEvent: { include: { media: true } } },
        });
      });
    });
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

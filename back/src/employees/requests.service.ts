import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { HelpersService } from '../helpers/helpers.service.js';

@Injectable()
export class RequestsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly helper: HelpersService,
  ) {}
  async create(createRequestDto: CreateRequestDto,senderId:string) {
    const { mediaIds, ...rest } = createRequestDto;
    let data = {...rest,senderId};
    await this.helper.notFound('employee', 'findUniqueOrThrow', {
      where: { id: data.receiverId },
    });
    if (mediaIds) {
      await this.helper.nestedCreateOrUpdateWithMedia(
        mediaIds,
        data,
        'MediaRequest',
        'create',
        'id',
        'unique',
      );
    }
    return await this.prisma.request.create({
      data,
      include: {
        senderReq:true,
        receiverReq:true,
        MediaRequest: { include: { media: true } },
      },
    });
  }

  async findAll() {
    return await this.prisma.request.findMany({
      include: {
        senderReq: true,
        receiverReq: true,
        MediaRequest: {
          include: { media: true },
        },
      },
    });
  }

  async findOne(id: string, prisma: Prisma.TransactionClient = this.prisma) {
    return await prisma.request.findFirst({
      where: {
        id,
      },
      include: {
        MediaRequest: true,
      },
    });
  }

  async findAllByReceiver(receiverId: string) {
    return await this.prisma.request.findMany({
      where: { receiverId },
      include : {senderReq:true,
       }
    });
  }

  async findAllBySender(senderId: string) {
    return await this.prisma.request.findMany({
      where:{senderId},
      include : {
      receiverReq:true}
    });
  }

  async update(id: string, dto: UpdateRequestDto) {
    const { mediaIds, ...rest } = dto;
    let data = { ...rest };

    
    return await this.prisma.$transaction(async (prisma) => {
      if (mediaIds) {
        let request = await this.findOne(id, prisma);
        request.MediaRequest.forEach(async (elem) => {
          if (!mediaIds.includes(elem.mediaId)) {
            await prisma.mediaRequest.delete({
              where: {
                requestMedia: { mediaId: elem.mediaId, requestId: id },
              },
            });
          }
        }),
          await this.helper.nestedCreateOrUpdateWithMedia(
            mediaIds,
            data,
            'MediaRequest',
            'update',
            id,
            'requestMedia',
          );
      }
      return await prisma.request.update({
        where: { id },
        data,
        include: { MediaRequest: { include: { media: true } } },
      });
    });
  }

  async remove(id: string) {
    return await this.prisma.$transaction(async (prisma) => {
      await prisma.mediaRequest.deleteMany({
        where: {
          mediaId: id,
        },
      });
      return await prisma.request.delete({
        where: {
          id,
        },
      });
    });
  }
}

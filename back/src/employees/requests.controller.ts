import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/decorators/currentUser';
@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}
@UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRequestDto: CreateRequestDto,@CurrentUser() user:any) {
    return this.requestsService.create(createRequestDto,user.employeeId);
  }

  @Get()
  findAll() {
    return this.requestsService.findAll();
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestsService.findOne(id);
  }
  @Get('by_receiver/:receiverId')
  findAllByReceiver(@Param('receiverId') receiverId: string) {
    return this.requestsService.findAllByReceiver(receiverId);
  }

  @Get('by_sender/:senderId')
  findAllBySender(@Param('senderId') senderId: string) {
    return this.requestsService.findAllByReceiver(senderId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestsService.update(id, updateRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestsService.remove(id);
  }
}

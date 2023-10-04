// import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
// import { StagesService } from './stages.service';
// import { CreateStageDto } from './dto/create-stage.dto';
// import { UpdateStageDto } from './dto/update-stage.dto';
// import { ApiTags } from '@nestjs/swagger';

// @ApiTags('Stages')
// @Controller('stages')
// export class StagesController {
//   constructor(private readonly stagesService: StagesService) {}

  
//   @Post('/byWeek')
//   async createStageByWeek(@Body() data: CreateStageDto) {
//     try {
//       if (!data.name || !data.startAt || !data.endAt) {
//         throw new Error('Name, startAt, and endAt are required.');
//       }
  
//       const createdStage = await this.stagesService.createStage(data);
  
//       return createdStage;
//     } catch (error) {
//       console.error('Error creating stage by week:', error);
//       throw new Error('An error occurred while creating a stage.');
//     }
//   }
  
// @Get('/byWeek/')
//   async findStagesByCurrentWeek() {
//     try {
     
// let stages=this.stagesService.findStagesByWeek()
//   return stages;
//     } catch (error) {
//       console.error('Error retrieving stages by current week:', error);
//       throw new Error('An error occurred while retrieving stages.');
//     }
//   }

  
  
  
  
  

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.stagesService.findOne(id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateStageDto: UpdateStageDto) {
//     return this.stagesService.update(id, updateStageDto);
//   }


//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.stagesService.remove(id);
//   }
// }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { ProjectsModule } from './projects/projects.module';
import { PrismaModule } from './prisma/prisma.module';
import { MediasModule } from './medias/medias.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from './prisma/prisma.service';
import { MediasService } from './medias/medias.service';
import { ClientsModule } from './clients/clients.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
 import { JwtService } from '@nestjs/jwt';
import { MailModule } from './mail/mail.module';
import { QuizsModule } from './quizs/quizs.module';
import { TeamsModule } from './teams/teams.module';
import { DepartmentsModule } from './departments/departments.module';
import { ChatRoomsModule } from './chat-rooms/chat-rooms.module';

import { TeamMenbershipsModule } from './team-menberships/team-menberships.module';
import { EmployeeChatRoomsModule } from './employee-chat-rooms/employee-chat-rooms.module';
import { MainComponentsModule } from './main-components/main-components.module';
import { SubComponentsModule } from './sub-components/sub-components.module';
import { ContentSubComponentsModule } from './content-sub-components/content-sub-components.module';
import { ContactModule } from './contact/contact.module';
// import { WorkTimeModule } from './work-time/work-time.module';
import { ContractModule } from './contract/contract.module';
import { DevisModule } from './devis/devis.module';



@Module({
  imports: [
    UsersModule,
    EmployeesModule,
    ProjectsModule,
    PrismaModule,
    MediasModule,
    ProductsModule,
    ClientsModule,
    AuthModule,
  
    MailModule,
    QuizsModule,
    TeamsModule,
    DepartmentsModule,
    ChatRoomsModule,
  
    
    TeamMenbershipsModule,

    EmployeeChatRoomsModule,
    MainComponentsModule,
    SubComponentsModule,
    ContentSubComponentsModule,
    ContactModule,
<<<<<<< HEAD
=======
    ContractModule,
    DevisModule,
    // WorkTimeModule,
  
   
>>>>>>> f968961f73e7cfffa4b669b4965dbf62c971c705
    
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    MediasService,
    AuthService,
    UsersService,
    JwtService,
  ],
})
export class AppModule {}

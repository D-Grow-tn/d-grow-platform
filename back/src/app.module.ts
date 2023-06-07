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
import { TechnologiesModule } from './technologies/technologies.module';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { MailModule } from './mail/mail.module';
import { TasksModule } from './tasks/tasks.module';
import { TestsModule } from './tests/tests.module';
import { QuizsModule } from './quizs/quizs.module';
import { TeamsModule } from './teams/teams.module';
import { DepartmentsModule } from './departments/departments.module';
import { ChatRoomsModule } from './chat-rooms/chat-rooms.module';
import { MessagesModule } from './messages/messages.module';
import { ProjectTechnologiesModule } from './project-technologies/project-technologies.module';
import { EmployeeTestsModule } from './employee-tests/employee-tests.module';
import { TeamMenbershipsModule } from './team-menberships/team-menberships.module';
import { EmployeeQuizsModule } from './employee-quizs/employee-quizs.module';
import { EmployeeChatRoomsModule } from './employee-chat-rooms/employee-chat-rooms.module';

import { PagesModule } from './pages/pages.module';
import { ContentPagesModule } from './content-pages/content-pages.module';
import { SectionsModule } from './sections/sections.module';
import { ParagraphsModule } from './paragraphs/paragraphs.module';
import { ButtonsModule } from './buttons/buttons.module';
import { SectionContentPagesModule } from './section-content-pages/section-content-pages.module';




@Module({
  imports: [UsersModule, EmployeesModule, ProjectsModule, PrismaModule, MediasModule, ProductsModule, ClientsModule,AuthModule,TechnologiesModule,MailModule, TasksModule, TestsModule, QuizsModule, TeamsModule, DepartmentsModule, ChatRoomsModule, MessagesModule, ProjectTechnologiesModule, EmployeeTestsModule, TeamMenbershipsModule, EmployeeQuizsModule, EmployeeChatRoomsModule, PagesModule, ContentPagesModule, SectionsModule, ParagraphsModule, ButtonsModule, SectionContentPagesModule],
  controllers: [AppController],
  providers: [AppService,PrismaService,MediasService,AuthService,UsersService,JwtService],
})
export class AppModule {}

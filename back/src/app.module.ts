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



@Module({
  imports: [UsersModule, EmployeesModule, ProjectsModule, PrismaModule, MediasModule, ProductsModule, ClientsModule,AuthModule,TechnologiesModule,MailModule],
  controllers: [AppController],
  providers: [AppService,PrismaService,MediasService,AuthService,UsersService,JwtService],
})
export class AppModule {}

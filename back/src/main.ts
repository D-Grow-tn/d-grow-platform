import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .addApiKey({ type: 'apiKey', name: 'Authorization', in: 'header' },'apiKey')
    .setVersion('0.1')
    .build();

  const document =SwaggerModule.createDocument(app, config);
  app.enableCors();
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
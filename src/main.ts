import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Swagger Example')
    .setDescription('The swagger API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
// const document
  await app.listen(3000);
}
bootstrap();

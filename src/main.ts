import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const config = new DocumentBuilder()
    .setTitle('Swagger Example')
    .setDescription('The swagger API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config,options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

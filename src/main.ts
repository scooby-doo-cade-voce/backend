import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configDocumentApi = new DocumentBuilder()
    .setTitle('Cadevc Api Documentation')
    .setDescription('Documentação da API do projeto Cadevc')
    .setVersion('1.0.0')
    .build();

  const documentApi = SwaggerModule.createDocument(app, configDocumentApi);
  SwaggerModule.setup('api-docs', app, documentApi);
  await app.listen(3000);
}
bootstrap();

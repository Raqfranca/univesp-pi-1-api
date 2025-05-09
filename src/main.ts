import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(process.env.PORT ?? 3000);
  app.enableCors();
  await app.listen(3000, '0.0.0.0');
  //await app.listen(8080, '127.0.0.1');

  //console.log('Application is running on http://127.0.0.1:8080');
}
bootstrap();





// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //NestFactory를 사용하여 AppModule을 생성

  app.enableCors({
    origin: 'http://localhost:3000', // Next.js dev 서버
    credentials: true,
  });

  await app.listen(3001);
  console.log(`🚀 Backend running on http://localhost:3001`);
}
bootstrap();

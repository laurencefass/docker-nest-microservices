import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const conf = app.get<ConfigService>(ConfigService);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: conf.get('WORKER_MICROSERVICE_HOST'),
      port: conf.get('WORKER_MICROSERVICE_PORT'),
      retryAttempts: 5,
      retryDelay: 3000,
    },
  });

  await app.startAllMicroservicesAsync();

  console.log(
    'Worker service listening on port',
    conf.get('WORKER_MICROSERVICE_PORT'),
  );
}
bootstrap();

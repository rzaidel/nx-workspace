/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './app/common/enums/env-variables';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';


  app.setGlobalPrefix(globalPrefix);


  const configService = app.get(ConfigService);
  const port = configService.get(EnvVariables.SERVER_PORT);



  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });


}

bootstrap();

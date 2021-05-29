import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './core/shared/services/app.service/app.service';

import { SystemConfigModule } from './core/config/system-config.module';


@Module({
  imports: [
    SystemConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

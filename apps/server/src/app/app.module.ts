import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './core/shared/services/app.service/app.service';

import { SystemConfigModule } from './core/config/system-config.module';
import { ServerCoreModule } from './core/ServerCoreModule';


@Module({
  imports: [
    SystemConfigModule,
    ServerCoreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './core/shared/services/app.service/app.service';

import { SystemConfigModule } from './core/config/system-config.module';
import { EventsGateway } from './events/events.gateway';


@Module({
  imports: [
    SystemConfigModule,
    EventsGateway
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

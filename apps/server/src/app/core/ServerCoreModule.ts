import { Module } from '@nestjs/common';
import { DataBaseModule } from './core-modules/db/db.module';

@Module({
  // imports: [DataBaseModule],
  // exports: [DataBaseModule]
})
export class ServerCoreModule {

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SocketService } from './core/shared/services/socket.service/socket.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [SocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}

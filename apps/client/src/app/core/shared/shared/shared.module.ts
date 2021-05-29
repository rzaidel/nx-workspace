import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketService } from '../services/socket.service/socket.service';



@NgModule({
  declarations: [],
  providers: [SocketService],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

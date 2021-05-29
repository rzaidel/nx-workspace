import { Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';


// socket.on('exception', function(data) {
//   console.log('event', data);
// });
// socket.on('disconnect', function() {
//   console.log('Disconnected');
// });
const io1 = io('http://localhost:3000/');

@Component({
  selector: 'solara-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  socket: Socket | any;

  constructor() {
  }
  ngOnInit() {
 this.socket = io1.connect();
    console.log(this.socket);

    this.socket.on('connect', function() {
      console.log('Connected');
      // socket.emit('events', { test: 'test' });
      // socket.emit('identity', 0, (response: any) =>
      //   console.log('Identity:', response),
      // );
    });
    this.socket.on('events', function(data: any) {
      console.log('event', data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { Message } from './models/message';
import { User } from './models/User';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { SocketIoService } from './socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;
  public roomid = 1;
  // onlineUsers = [];

  constructor (public dialog: MatDialog, public socketIo: SocketIoService) {
    // this.socket.on('connect_timeout', (timeout) => {
    //   console.log('timeout', timeout);
    // });
    // this.socket.on('connect_error', (err) => {
    //   console.log('err', err);
    // });
  }
  
  ngOnInit () {
    // this.checkUser();
  }
}

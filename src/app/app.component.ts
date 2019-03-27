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
  private socket;
  title = 'angular-socket';
  messageList = [];
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
    this.checkUser();
  }
  
  addMsg (msg: Message) {
    this.messageList.push(msg);
  }

  checkUser () {
    if (!this.user) {
      setTimeout(() => this.openLoginDialog(), 0);
    }
  }

  openLoginDialog () {
    const user = this.user;
    const dialog = this.dialog.open(LoginDialogComponent);

    dialog.afterClosed().subscribe(username => {
      this.user = new User(username);

      this.socketIo.init(this.user);
      this.join(this.roomid);
      this.listenToChat();
    });
  }

  listenToChat () {
    this.onUserJoined();

    this.socketIo.getMessages().subscribe((msg: Message) => {
      this.addMsg(msg);
    });
  }

  join (roomid) {
    // this.socketIo.sendMessage('user logined', this.user);
    this.socketIo.sendMessage('user join', roomid, this.user);
  }

  onUserJoined () {
    this.socketIo.onUserJoined().subscribe(username => {
      this.addMsg({
        text: `${username} joined the Chat`,
        type: 'info'
      });
    });
  }

  enter (text: string) {
    text = text.trim();
    if (!text) return;
    
    const msg: Message = {
      text,
      timestamp: Date.now(),
      username: this.user.username,
      user: this.user
    };

    this.socketIo.sendMessage('chat', this.roomid, msg);
    this.addMsg({...msg, isSelf: true});
  }
}

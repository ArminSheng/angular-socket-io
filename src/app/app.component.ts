import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { Message } from './models/message';
import { User } from './models/User';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

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

  constructor (public dialog: MatDialog) {
    // this.socket = io('http://192.168.0.103:3000');
    this.socket = io('http://localhost:3000');
  }
  
  ngOnInit () {
    this.listenToChat();
    this.checkUser();
    this.onUserJoined();
  }

  addMsg (msg: Message) {
    this.messageList.push(msg)
  }

  checkUser () {
    if (!this.user) {
      // const u: User = {
      //   username: 'Armin',
      //   avatar: 'https://avatars2.githubusercontent.com/u/10386102?s=40&v=4'
      // }

      this.openLoginDialog();

    }
  }

  openLoginDialog () {
    const dialog = this.dialog.open(LoginDialogComponent);

    dialog.afterClosed().subscribe(username => {
      if (!username) {
        this.user = new User();
        return;
      }

      this.user = {
        username
      };

      this.join();
    });
  }

  listenToChat () {
    this.socket.on('chat', (msg: Message) => {
      console.log(msg);
      
      this.addMsg(msg);
    });
  }

  join () {
    this.socket.emit('user join', this.user);
  }

  onUserJoined () {
    this.socket.on('user joined', username => {
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
      username: this.user.username
    };

    this.socket.emit('chat', msg);
    this.addMsg(msg);
  }
}

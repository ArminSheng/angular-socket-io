import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../socket-io.service';
import { Message } from '../models/message';
import { User } from '../models/User';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private socket;
  title = 'angular-socket';
  messageList = [];
  user: User;
  public roomid = 'abc';

  constructor(public socketIo: SocketIoService, 
    private authService: AuthService) { }

  ngOnInit () {
    this.user = this.authService.getUser();
    
    this.socketIo.init(this.user);
    this.join();
    this.onUserJoined();
    this.listenToChat();
  }
  
  addMsg (msg: Message) {
    this.messageList.push(msg);
  }

  // openLoginDialog () {
  //   const user = this.user;
  //   const dialog = this.dialog.open(LoginDialogComponent);

  //   dialog.afterClosed().subscribe(username => {
  //     this.user = new User(username);

  //     this.socketIo.init(this.user);
  //     this.join(this.roomid);
  //     this.listenToChat();
  //   });
  // }

  listenToChat () {
    this.socketIo.getMessages().subscribe((msg: Message) => {
      this.addMsg(msg);
    });
  }

  join () {
    this.socketIo.join(this.roomid);
  }

  onUserJoined () {
    console.log('onjoin');
    
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

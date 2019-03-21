import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import {Message} from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private socket;
  title = 'angular-socket';
  messageList = [];

  constructor () {
    this.socket = io('http://192.168.0.103:3000');
  }
  
  ngOnInit () {
    this.socket.emit('join', 'hello!');
    this.socket.on('chat', (msg: Message) => {
      this.addMsg(msg);
    });
  }

  addMsg (msg: Message) {
    this.messageList.push(msg)
  }

  enter (text: string) {
    text = text.trim();
    if (!text) return;
    
    const msg = new Message(text, Date.now());
    this.socket.emit('chat', msg);
    this.addMsg(msg);
  }
}

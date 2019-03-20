import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private socket;
  title = 'angular-socket';
  messageList = [];
  inputText = '';

  constructor () {
    this.socket = io('http://192.168.0.106:3000');
  }
  
  ngOnInit () {
    this.socket.emit('join', 'hello!');
    this.socket.on('chat', msg => {
      this.addMsg(msg);
      this.inputText = '';
    });
  }

  addMsg (msg: string) {
    this.messageList.push(msg)
  }

  enter () {
    this.socket.emit('chat', this.inputText);
  }
}

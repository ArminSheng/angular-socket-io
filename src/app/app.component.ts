import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-socket';
  private socket;
  inputText = '';

  constructor () {
    this.socket = io('http://192.168.0.106:3000');
  }
  
  ngOnInit () {
    this.socket.emit('chat', 'hello!');
    this.socket.on('chat', msg => {
      
    })
  }

  enter () {
    this.socket.emit('chat', this.inputText);
  }
}

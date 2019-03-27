import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { User } from './models/User';

const SERVER_HOST = 'http://192.168.0.102:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private socket;
  private defaultServer = SERVER_HOST;
  public onlineUsers = [];
  public socketid: string;

  constructor() {
    // this.init();
  }

  init (user?: User) {
    this.connect();
    console.log('init')
    this.sendMessage('user logined', user);
  }

  connect () {
    if (this.socket && this.socket.connected) return;
    this.socket = io(this.defaultServer);
    this.socketid = this.socket.id;
    console.log('prev')
    this.socket.on('disconnect', this.socket.open);
  }

  onUserJoined () {
    return new Observable(observer => {
      this.socket.on('user joined', msg => {
        observer.next(msg);
      });
    });
  }

  getOnlineUsers () {
    return new Observable(observer => {
      this.connect();

      this.socket.on('push online users', res => {
        console.log(res);
        
        observer.next(res);
        this.onlineUsers = res;
      });

      return {unsubscribe: () => this.socket.close() };
    });
  }

  sendMessage (event, ...args) {
    this.socket.emit(event, ...args);
  }

  getMessages () {
    return new Observable(observer => {
      this.connect();
      
      this.socket.on('chat', msg => {
        observer.next(msg);
      });

      return {unsubscribe: () => this.socket.close() };
    })
  }
}

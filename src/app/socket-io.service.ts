import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { User } from './models/User';
import { AuthService } from './auth/auth.service';

// const SERVER_HOST = 'http://192.168.0.102:3000';
const SERVER_HOST = 'http://' + window.location.hostname + ':3000';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private socket;
  private defaultServer = SERVER_HOST;
  public onlineUsers = [];
  public socketid: string;
  user: User;

  constructor(private authService: AuthService) {
  }
  
  init (user?: User) {
    this.user = this.authService.getUser();
    this.connect().subscribe(() => {
      this.sendMessage('user logined', this.socket.id, user);
      this.onDisconnect();
    });
    
  }

  connect () {
    return new Observable(obs => {
      if (this.socket && this.socket.disconnect) {
        this.socket.connect();
        obs.next(this.socket);
        return;
      }

      this.socket = io(this.defaultServer);
      // this.socket.on('push online users', msg => {
      //   console.log('on push', msg);
        
      // });
      
      this.socket.on('connect', () => {
        this.socketid = this.socket.id;
        obs.next(this.socket);
      });
    });
  }

  onDisconnect () {
    this.socket.on('disconnect', () => {
      this.socket.connect();
      console.log('disconnect reopen');
    });
  }

  join (roomid) {
    this.sendMessage('user join', roomid, this.user);
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
      // this.connect();
      console.log(this.socket);
      
      this.socket.on('push online users', res => {
        // console.log('get online', res);
        
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
      // this.connect();
      
      this.socket.on('chat', msg => {
        observer.next(msg);
      });

      return {unsubscribe: () => this.socket.close() };
    })
  }
}

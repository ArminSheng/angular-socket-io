import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable, interval } from 'rxjs';
import { User } from './models/User';
import { AuthService } from './auth/auth.service';
import { log } from 'util';

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
    return new Observable(obs => {
      this.user = this.authService.getUser();
      this.socket = io(this.defaultServer);
      this.sendMessage('user logined', user);
      const heatbeart$ = this.heartbeat();

      this.onConnect().subscribe();

      obs.next();

      return {unsubscribe: () => {
        heatbeart$.unsubscribe();
        this.socket.close();
      }};
    });
  }

  heartbeat () {
    const interval$ = interval(3000).subscribe(() => {
      this.sendMessage('heartbeat');
    });

    return interval$;
  }

  onConnect () {
    return new Observable(obs => {
      this.socket.on('connect', () => {
        this.socketid = this.socket.id;
      });

      obs.next(this.socket);
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
      // this.connect().subscribe((socket: any) => {
        this.socket.on('push online users', res => {
          observer.next(res);
          this.onlineUsers = res;
        });
      // })

      return {unsubscribe: () => this.socket.close() };
    });
  }

  sendMessage (event, ...args) {
    this.socket.emit(event, ...args);
  }

  getMessages () {
    return new Observable(observer => {
      this.socket.on('chat', msg => {
        observer.next(msg);
      });

      return {unsubscribe: () => this.socket.close() };
    })
  }
}

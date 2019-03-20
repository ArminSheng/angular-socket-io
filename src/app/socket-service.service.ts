import { Injectable } from '@angular/core';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  private socket;
  private defaultServer = 'http://192.168.0.106:3000'

  constructor() { }

  init () {
    this.socket = io(this.defaultServer);
  }
}

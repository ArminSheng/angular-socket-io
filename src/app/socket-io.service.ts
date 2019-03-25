import { Injectable } from '@angular/core';
import io from 'socket.io-client';

const SERVER_HOST = 'http://192.168.0.102:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  private socket;
  private defaultServer = SERVER_HOST;

  constructor() {

  }

  init () {
    this.socket = io(this.defaultServer);
  }
}

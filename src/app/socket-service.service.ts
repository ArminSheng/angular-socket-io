import { Injectable } from '@angular/core';
import io from 'socket.io-client';

const SERVER_HOST = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class SocketServiceService {
  private socket;
  private defaultServer = SERVER_HOST;

  constructor() { }

  init () {
    this.socket = io(this.defaultServer);
  }
}

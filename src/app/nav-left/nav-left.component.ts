import { Component, OnInit, Input } from '@angular/core';
import { SocketIoService } from '../socket-io.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  rooms = [];
  constructor(private socketService: SocketIoService) { }

  ngOnInit() {
    // this.rooms = this.socket.onlineUsers;
    this.socketService.getOnlineUsers().subscribe((res: []) => {
      const idx = res.findIndex((s: any) => s.id === this.socketService.socketid);
      res.splice(idx, 1);
      console.log(idx, res);
      this.rooms = res;
    });
  }
}

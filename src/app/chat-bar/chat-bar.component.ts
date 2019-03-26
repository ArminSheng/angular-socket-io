import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.scss']
})
export class ChatBarComponent implements OnInit {
  @Input() rooms: any[] = [
    {roomid: 1, name: 'Armin Sheng', isActive: true},
    {roomid: 1, name: 'Jack Ma', isActive: false}
  ];

  constructor() { }

  ngOnInit() {
  }

}

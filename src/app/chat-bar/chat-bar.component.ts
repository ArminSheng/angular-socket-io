import { Component, OnInit, Input } from '@angular/core';
const mock = [
  {roomid: 1, name: 'Armin Sheng', isActive: true},
  {roomid: 1, name: 'Jack Ma', isActive: false}
];

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.scss']
})
export class ChatBarComponent implements OnInit {
  @Input() rooms: [];

  constructor() { }

  ngOnInit() {
  }

}

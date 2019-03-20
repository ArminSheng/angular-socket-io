import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  @Input() list: [];

  constructor() { }

  ngOnInit() {
  }

}

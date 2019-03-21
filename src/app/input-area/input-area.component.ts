import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent implements OnInit {
  @Output() entered = new EventEmitter();
  inputText = '';

  constructor() { }

  ngOnInit() {
  }

  enter () {
    this.entered.emit(this.inputText);
    this.inputText = '';
  }
}

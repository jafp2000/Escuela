import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Output() open = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nextStep(){
    this.open.emit(null);
  }

}

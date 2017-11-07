import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.css']
})
export class ResumeDataComponent implements OnInit {
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nextStep(){
    this.next.emit(null);
  }

  previousStep(){
    this.previous.emit(null);
  }

}

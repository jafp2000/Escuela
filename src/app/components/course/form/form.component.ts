import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Output() open = new EventEmitter();
  schedule:boolean = false;
  data:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showSchedule(event){
    this.schedule = true;
  }

  showData(event){
    this.data = true;
  }

  nextStep(){
    this.open.emit(null);
  }
}

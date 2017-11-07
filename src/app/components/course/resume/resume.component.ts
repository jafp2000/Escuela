import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @Output() back = new EventEmitter();
  payment:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPayment(event){
    this.payment = true;
  }

  previousStep(){
    this.back.emit(null);
  }

}

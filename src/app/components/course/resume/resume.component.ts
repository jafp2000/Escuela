import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChange
} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnChanges {
  @Output() back = new EventEmitter();
  payment:boolean = false;
  @Input('student') student:JSON;

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      this.student  = changedProp.currentValue;
    }
  }

  showPayment(event){
    this.payment = true;
  }

  previousStep(){
    this.back.emit(null);
  }

}

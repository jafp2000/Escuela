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

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
    }
  }

  showPayment(event){
    this.payment = true;
  }

  previousStep(){
    this.back.emit(null);
  }

}

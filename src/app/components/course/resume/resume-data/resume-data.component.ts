import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChange
} from '@angular/core';
import { Student } from '../../../../models/student.model';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.css']
})
export class ResumeDataComponent implements  OnChanges{
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
  @Input('student') student:any;

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      this.student = changedProp.currentValue.student.student;
    }
  }

  nextStep(){
    this.next.emit(null);
  }

  previousStep(){
    this.previous.emit(null);
  }

}

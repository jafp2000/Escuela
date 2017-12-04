import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChange,
  OnInit
} from '@angular/core';
import { Student } from '../../../../models/student.model';
import { RegisterService } from '../../../../service/register.service';

@Component({
  selector: 'app-resume-data',
  templateUrl: './resume-data.component.html',
  styleUrls: ['./resume-data.component.css']
})
export class ResumeDataComponent implements  OnChanges, OnInit{
  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
  student:any;

  constructor(private _service:RegisterService) { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
    }
  }

  ngOnInit(){
    this.student = this._service.getEstudiante();
  }

  nextStep(){
    this.next.emit(null);
  }

  previousStep(){
    this.previous.emit(null);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Student } from '../../../../models/student.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Output() open = new EventEmitter();
  student = new Student('','','','','','','','','', new Date(), '');

  constructor() { }

  ngOnInit() {
  }

  nextStep(){
    this.open.emit({student: this.student});
  }

}

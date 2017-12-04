import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Student } from '../../../../models/student.model';
import { RegisterService } from '../../../../service/register.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../../node_modules/flatpickr/dist/flatpickr.css']
})
export class DataComponent implements OnInit {
  @Output() open = new EventEmitter();
  student = new Student('','','','','','','','','', new Date(), '');

  constructor(private _service:RegisterService) { }

  ngOnInit() {
  }

  nextStep(){
    this._service.setEstudiante(this.student);
    this.open.emit({student: this.student});
  }

}

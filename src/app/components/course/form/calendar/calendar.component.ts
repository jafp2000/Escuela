import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';
import { RegisterService } from '../../../../service/register.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../../node_modules/flatpickr/dist/flatpickr.css']
})
export class CalendarComponent implements OnInit {
  selectedDate: Date = new Date();
  enablesDate:Date[];
  @Output() open = new EventEmitter();

  constructor(private _serviceRegister:RegisterService) { }

  ngOnInit() {
    var mod = this._serviceRegister.getModalidad();
    let init = new Date(mod.fecha_inicio);
    let finish = new Date(mod.fecha_fin);
    this.getDates(init, finish);
  }

  nextStep(){
    this.open.emit(null);
    this.selectedDate.setDate(this.selectedDate.getDate() +1);
    console.log(this.selectedDate);
  }
  
  getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = new Date(startDate);
    while (currentDate <= stopDate) {
        let d = new Date(currentDate);
        dateArray.push(d);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    this.enablesDate = dateArray;
  }

}

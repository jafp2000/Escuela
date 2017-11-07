import {
  Component,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../../node_modules/flatpickr/dist/flatpickr.css']
})
export class CalendarComponent implements OnInit {
  inlineDatePicker: Date = new Date();
  @Output() open = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  nextStep(){
    this.open.emit(null);
  }

}

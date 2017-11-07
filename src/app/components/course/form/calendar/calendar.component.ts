import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['../../../../../../node_modules/flatpickr/dist/flatpickr.css']
})
export class CalendarComponent implements OnInit {
  inlineDatePicker: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}

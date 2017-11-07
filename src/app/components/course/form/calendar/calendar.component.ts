import { Component, OnInit } from '@angular/core';
import 'flatpickr/dist/flatpickr.css';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  inlineDatePicker: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}

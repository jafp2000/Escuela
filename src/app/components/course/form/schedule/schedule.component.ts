import { Component, OnInit, EventEmitter, Output } from '@angular/core';
const hours = [
  ["6:30 - 7:15", "11:45 - 12:30", "17:00 - 17:45"],
  ["7:15 - 8:00", "12:30 - 13:15", "17:45 - 18:30"],
  ["8:00 - 8:45", "13:15 - 14:00", "18:30 - 19:15"],
  ["8:45 - 9:30", "14:00 - 14:45", "19:15 - 20:00"],
  ["9:30 - 10:15", "14:45 - 15:30", "20:00 - 20:45"],
  ["10:15 - 11:00", "15:30 - 16:15", "20:45 - 21:30"],
  ["11:00 - 11:45", "16:15 - 17:30", "21:30 - 22:15"]
]

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {
  @Output() open = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  nextStep(){
    this.open.emit(null);
  }

}

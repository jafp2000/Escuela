import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Output() open = new EventEmitter();
  horarios:boolean = false;
  datos:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  showHorarios(){
    this.horarios = true;
  }
  
  showDatos(){
    this.datos = true;
  }
  
  nextStep(){
    this.open.emit(null);
  }

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
}

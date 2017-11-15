import { Component, EventEmitter, Output } from '@angular/core';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  lat: number = -29.9264439;
  lng: number = -71.2412639;

  @Output() open = new EventEmitter();

  constructor() {
    this.flecha1=false;
    this.flecha2=false;
  }

  flecha1:boolean;
  flecha2:boolean;

  select(flecha){
    if(flecha === 1){
      this.flecha1 = !this.flecha1;
    }else if(flecha === 2){
      this.flecha2 = !this.flecha2;
    }else{
      this.flecha1 = false;
      this.flecha2 = false;
    }

  }

  nextStep(){
    this.open.emit(null);
  }


}

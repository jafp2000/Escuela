import { Component } from '@angular/core';
import { DragScroll } from 'angular2-drag-scroll';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  constructor() { }
  flecha1=false;
  flecha2=false;
  flecha3=false;
  flecha4=false;

  hideAll(){
    this.flecha1=false;
    this.flecha2=false;
    this.flecha3=false;
    this.flecha4=false;
  }

  select(flecha){
    switch(flecha){
      case 1:
        this.hideAll();
        this.flecha1 = !this.flecha1;
      break;
      case 2:
        this.hideAll();
        this.flecha2 = !this.flecha2;
      break;
      case 3:
        this.hideAll();
        this.flecha3 = !this.flecha3;
      break;
      case 4:
        this.hideAll();
        this.flecha4 = !this.flecha4;
      break;
    }
  }


}

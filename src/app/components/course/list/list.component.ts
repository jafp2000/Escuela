import { Component, EventEmitter, Output } from '@angular/core';
import { DragScroll } from 'angular2-drag-scroll';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  
  @Output() open = new EventEmitter();

  constructor() {
    this.flecha1=false;
    this.flecha2=false;
    this.flecha3=false;
    this.flecha4=false;
  }
  
  flecha1:boolean;
  flecha2:boolean;
  flecha3:boolean;
  flecha4:boolean;

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
        if(this.flecha1){
          this.flecha1 = false;
        }else{
          this.flecha1 = true;
        }
      break;
      case 2:
        this.hideAll();
        if(this.flecha2){
          this.flecha2 = false;
        }else{
          this.flecha2 = true;
        }
      break;
      case 3:
        this.hideAll();
        if(this.flecha3){
          this.flecha3 = false;
        }else{
          this.flecha3 = true;
        }
      break;
      case 4:
        this.hideAll();
        if(this.flecha4){
          this.flecha4 = false;
        }else{
          this.flecha4 = true;
        }
      break;
      default:
        this.hideAll();
    }
  }
  
  nextStep(){
    this.open.emit(null);
  }


}

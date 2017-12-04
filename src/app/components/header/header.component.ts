import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data:any[];

  constructor(private _service:CourseService) { }

  ngOnInit() {
  }

  test(){
    let init = new Date("11/28/2017");
    let finish = new Date();
    console.log(init);
    this.getDates(init, finish);
  }
  
  getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = new Date(startDate);
    console.log("PARAMETROS:");
    console.log(startDate);
    console.log(stopDate);
    console.log("INICIO DE WHILE");
    while (currentDate <= stopDate) {
        let d = new Date(currentDate);
        dateArray.push(d);
        currentDate.setDate(currentDate.getDate() + 1);
        console.log(currentDate);
    }
    console.log(dateArray);
  }

}

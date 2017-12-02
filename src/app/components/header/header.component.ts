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
    this._service.updateData("Hola mundo otra vez");
    console.log(this._service.getData());
  }

}

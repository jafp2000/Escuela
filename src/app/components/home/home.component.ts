import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  viewForm:boolean = false;
  viewResumen:boolean = false;
  student:JSON;

  constructor() { }


  ngOnInit() {
    this.viewForm = false;
    this.viewResumen = false;
  }

  showForm(event){
    this.viewForm = true;
  }

  showResumen(event){
    this.student = event;
    this.viewResumen = true;
    this.viewForm = false;
  }

  backForm(event){
    this.viewResumen = false;
    this.viewForm = true;
  }

}

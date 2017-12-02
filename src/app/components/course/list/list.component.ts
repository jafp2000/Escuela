import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { CitiesService } from '../../../service/cities.service';
import { CourseService } from '../../../service/course.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  lat: number = -29.9264439;
  lng: number = -71.2412639;
  cities:any[];
  selectedCyty:any;

  @Output() open = new EventEmitter();

  constructor(private _service:CitiesService, private _serviceCourse:CourseService) {
    this.flecha1=false;
    this.flecha2=false;
  }

  onTest(){
    console.log(this._serviceCourse.getData());
  }

  ngOnInit() {
    this._service.getCiudades().subscribe(
      result => {
        this.cities = result['Ciudad'];
        var temp = this.cities[0];
        this.selectedCyty = temp.id_ciudad;
        this.lat = parseFloat(temp.latitud);
        this.lng = parseFloat(temp.longitud);
      },
      error => {
        console.log('ha ocurrido un error');
      }
    )
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

  onChange(selectValue){
    var temp = this.cities.filter(
      city => city.id_ciudad === selectValue
    );
    this.selectedCyty = temp[0].id_ciudad;
    this.lat = parseFloat(temp[0].latitud);
    this.lng = parseFloat(temp[0].longitud);
  }


}

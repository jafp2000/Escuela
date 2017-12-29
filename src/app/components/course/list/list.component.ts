import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { CourseService } from '../../../service/course.service';
import { CitiesService } from '../../../service/cities.service';
import { CategoriesService } from '../../../service/categories.service';
import { RegisterService } from '../../../service/register.service';
import {SlickModule} from 'ngx-slick';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  lat: number = -29.9264439;
  lng: number = -71.2412639;
  cities:any;
  categories:any;
  cursos:any;
  modalidades:any[] = [];
  selectedCity:any;
  selectedCategory:any;
  selectedCurso:any;
  selectedModalidad:any;
  titles:any[];
  courses:boolean = false;
  slideConfig = {'slidesToShow': 2, 'slidesToScroll': 1, 'rows': 0, 'focusOnSelect': true };
  flecha:string = "1";
  activarFlecha:boolean = false;
  modalidadesSeleccionadas:any[];
  requisitos:string = "";

  @Output() open = new EventEmitter();

  constructor(
    private _serviceCourse:CourseService,
    private _serviceRegister:RegisterService,
    private _serviceCities:CitiesService,
    private _serviceCategories:CategoriesService) {
  }

  onSelectCategory(category_id){
    this.selectedCategory = category_id;
    this._serviceCourse.getCursosMes(this.selectedCategory, this.selectedCity).subscribe(
      result => {
        this.cursos = result
        if(this.cursos.length > 0){
          $('.courses-list').css("display", "block");
          $('.courses-no-list').css("display", "none");
          this.modalidadesSeleccionadas = this.cursos[0].modalidad;
        }else{
          $('.courses-list').css("display", "none");
          $('.courses-no-list').css("display", "block");
        }
      },
      error => {
        this.cursos = []
        $('.courses-list').css("display", "none");
        $('.courses-no-list').css("display", "block");
        console.log(error)
      }
    );
  }

  ngOnInit() {
    this._serviceCities.getCiudades().subscribe(
      result => {
        this.cities = result;
        var temp = this.cities[1];
        this.selectedCity = temp.ID_CIUDAD;
        this.lat = parseFloat(temp.latitud);
        this.lng = parseFloat(temp.longitud);
      },
      error => {
        console.log(error);
      }
    );
    this._serviceCategories.getCategorias().subscribe(
      result => {
        this.categories = result;
        console.log(this.categories);
      },
      error => {
        console.log(error);
      }
    )
  }

  select(index, id_curso, requisitos){
    this.activarFlecha = true;
    if((index % 2) == 0){
      this.flecha = "1";
    }else{
      this.flecha = "2";
    }
    this.selectedCurso = id_curso;
    this.cargarModalidades();
    console.log(this.modalidadesSeleccionadas);
    this.requisitos = requisitos;
  }

  nextStep(id_modalidad){
    this.selectedModalidad = id_modalidad;
    this._serviceRegister.setdataSeleccionada(this.selectedCity, this.selectedCategory, this.selectedCurso, this.selectedModalidad);
    let temp = this.modalidadesSeleccionadas.filter(
      mod => mod.id_modalidad === id_modalidad
    );
    this._serviceRegister.setModalidad(temp[0]);

    this.open.emit(null);
  }

  onChange(selectValue){
    var temp = this.cities.filter(
      city => city.ID_CIUDAD == selectValue
    );
    this.selectedCity = temp[0].ID_CIUDAD;
    this.lat = parseFloat(temp[0].latitud);
    this.lng = parseFloat(temp[0].longitud);
  }

  getOrange(index){
    if((index % 2) == 0){
      return "1";
    }else{
      return "2";
    }
  }

  cargarModalidades(){
    if(this.cursos.length > 0){
      var temp = this.cursos.filter(
        curso => curso.id_curso === this.selectedCurso
      );
      this.modalidadesSeleccionadas = temp[0].modalidad;
    }
  }

  calcularDias(fechaInicio, fechaFin){
    var date1 = new Date(fechaInicio);
    var date2 = new Date(fechaFin);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
  }

  getDisponibles(modalidad){
    var temp = 0;
    if(modalidad.length > 0){
      modalidad.forEach(mod => {
        temp += mod.disponibilidad;
      });
    }
    return temp;
  }

  getCategoryName():string{
    var name = "";
    var temp = this.categories.filter(
      cat => cat.ID_CATEGORIA == this.selectedCategory
    );
    name = temp[0].NOMBRE;
    return name;
  }

}

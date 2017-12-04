import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {data} from '../models/cursos.model';

@Injectable()
export class CourseService {
  data:any;
  
  constructor(private http: HttpClient) {
    this.data = data;
  }

  getCiudades(){
    return this.data.ciudades;
  }
  
  getCursos(id_ciudad, id_categoria){
    var temp = this.data.ciudades;
    var ciudad = temp.filter(
      city => city.id_ciudad == id_ciudad
    );
    if(ciudad.length > 0){
      var cursos = ciudad[0].cursos;
      if(cursos.length > 0){
        var response = cursos.filter(
          curso => curso.id_categoria == id_categoria
        );
        return response;
      }else{
        alert('No hay cursos disponibles para su seleccion');
      }
    }else{
      alert('No hay cursos disponibles para su seleccion');
    }
    //
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {data} from '../models/cursos.model';
import { Constants } from './api_config';

@Injectable()
export class CourseService {
  data:any;

  constructor(private http: HttpClient) {
    this.data = data;
  }

  getCursosMes(id_categoria, id_ciudad){
    let date = new Date();
    let mes = date.getMonth().toString();
    let ano = date.getFullYear().toString();
    const URL = Constants.BASE_URL +
      'api/getCursosMes/' +
      id_categoria + '/' +
      id_ciudad + '/' +
      mes + '/' +
      ano;
    return this.http.get(URL)
      .map(res => res);
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

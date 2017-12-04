import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {
    dataSeleccionada:any;
    estudiante:any;
    modalidad:any;
    fecha:any;

  constructor(private http: HttpClient) {
      this.dataSeleccionada = {
          ciudad: "",
          categoria: "",
          curso: "",
          modalidad: ""
      };
      this.estudiante = {};
      this.modalidad = {};
      this.fecha = new Date();
  }

  setdataSeleccionada(ciudad, categoria, curso, modalidad){
      this.dataSeleccionada.ciudad = ciudad;
      this.dataSeleccionada.categoria = categoria;
      this.dataSeleccionada.curso = curso;
      this.dataSeleccionada.modalidad = modalidad;
  }

  getDataSeleccionada(){
    return this.dataSeleccionada;
  }

  setModalidad(modalidad){
      this.modalidad = modalidad;
  }

  getModalidad(){
      return this.modalidad;
  }

  setFecha(date){
    this.fecha = new Date(date);
    console.log(this.getFecha());
  }

  getFecha(){
      return this.fecha;
  }

  setEstudiante(estudiante){
    this.estudiante = estudiante;
  }

  getEstudiante(){
    return this.estudiante;
  }
}

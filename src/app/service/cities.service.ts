import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CitiesService {

  constructor(private http: HttpClient) { }

  getCiudades(){
    return this.http.get('http://localhost/rest_api/api/getCiudades')
      .map(res => res);
  }

}

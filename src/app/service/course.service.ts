import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Constants } from './api_config';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient) { }

  test(){
    const URL = Constants.BASE_URL + 'api/getCiudades';
    return this.http.get(URL)
      .map(res => res);
  }
}

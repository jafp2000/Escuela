import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Constants } from './api_config';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategorias(){
    const URL = Constants.BASE_URL + 'api/getCategorias';
    return this.http.get(URL)
      .map(res => res);
  }

}

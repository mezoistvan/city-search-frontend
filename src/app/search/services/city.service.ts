import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from './../../../environments/environment';

@Injectable()
export class CityService {

  constructor(
    private http: Http
  ) {}

  public searchCities(searchText: string): Observable<Array<string>> {
    console.log(searchText);
    return this.http.post(environment.apiUrl + '/cities', searchText)
      .map(cities => cities.json());
  }

}

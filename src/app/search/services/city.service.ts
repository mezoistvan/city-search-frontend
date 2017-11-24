import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from './../../../environments/environment';

@Injectable()
export class SearchCityService {

  constructor(
    private http: Http
  ) {}

  public searchCities(searchText: string): Observable<Array<Array<string>>> {
    // the ordering happens on the backend:
    //     - first the cities that begin with the searchText, ordered alphabetically
    //     - then the cities that contain, but not begin with the searchText, ordered alphabetically
    return this.http.post(environment.apiUrl + '/cities', searchText)
      .map(cities => cities.json());
  }

}

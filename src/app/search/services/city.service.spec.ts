import { TestBed, inject } from '@angular/core/testing';
import { XHRBackend, HttpModule, Http, RequestMethod, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { SearchCityService } from './city.service';

describe('SearchCityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchCityService,
        { provide: XHRBackend, useClass: MockBackend }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('searchCities should post a string to /cities', inject([Http, XHRBackend],
    (http: Http, backend: MockBackend) => {
      const searchTerm = 'Budapest';
      const options = new ResponseOptions( { status: 200, body: [['Budapest', 'HU']] } );
      const response = new Response( options );

      backend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.url.includes('/cities')).toBe(true);
        expect(connection.request.method).toEqual( RequestMethod.Post );
        expect(connection.request.getBody()).toEqual(searchTerm);
        connection.mockRespond(response);
      });

      const cityService = new SearchCityService(http);

      cityService.searchCities(searchTerm);
    }));

  it('searchCities should not modify the response from the server', inject([Http, XHRBackend],
    (http: Http, backend: MockBackend) => {
      const serverResponse = [['Budapest', 'HU']];
      const options = new ResponseOptions( { status: 200, body: serverResponse } );
      const response = new Response( options );

      backend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(response);
      });

      const cityService = new SearchCityService(http);

      cityService.searchCities('Budapest').subscribe((mockResponse: Array<Array<string>>) => {
        expect(mockResponse).toEqual(serverResponse);
      });
    }));
});

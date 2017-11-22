import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

import { CityService } from '../../services/city.service';

@Component({
  selector: 'cs-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.scss']
})
export class SearchMainComponent implements OnInit {

  public searchText$: Subject<string> = new Subject<string>();
  public searchResults: Array<string> = [];
  public isFocused = false;

  constructor(
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.searchText$
      .debounceTime(300)
      .subscribe(text =>
        this.cityService.searchCities(text)
          .subscribe(result => this.handleSearchResult(result))
      );
  }

  onInputValueChange(event: string): void {
    this.searchText$.next(event);
  }

  handleSearchResult(result: Array<string>): void {
    this.searchResults = [
      ...result
    ];
  }

  onFocusChange(isFocused: boolean): void {
    this.isFocused = isFocused;
  }
}

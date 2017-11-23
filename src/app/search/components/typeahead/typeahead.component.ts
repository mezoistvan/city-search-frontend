import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';

import { CityService } from '../../services/city.service';

@Component({
  selector: 'cs-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit, OnDestroy {

  public searchText$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchResults: Array<string> = [];
  public searchSubscription$: Subscription;
  public inputValue: string;

  private isFocused = false;

  constructor(
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.searchText$
      .debounceTime(500)
      .subscribe(text =>
        this.searchSubscription$ = this.cityService.searchCities(text)
          .subscribe(result => this.handleSearchResult(result))
      );
  }

  handleSearchResult(result: Array<string>): void {
    this.searchResults = [
      ...result
    ];
    this.searchSubscription$.unsubscribe();
  }

  onInputValueChange(event: string): void {
    this.searchText$.next(event);
  }

  setValue(searchResult: string): void {
    this.inputValue = searchResult;
    this.searchText$.next(searchResult);
  }

  onFocusChange(isFocused: boolean): void {
    this.isFocused = isFocused;
  }

  isSearchActive() {
    return this.searchSubscription$ && !this.searchSubscription$.closed;
  }

  ngOnDestroy() {
    if (this.searchSubscription$) {
      this.searchSubscription$.unsubscribe();
    }
  }
}

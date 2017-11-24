import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import * as Immutable from 'immutable';

import { SearchCityService } from '../../services/city.service';


@Component({
  selector: 'cs-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class SearchTypeaheadComponent implements OnInit, OnDestroy {

  public searchResults: Immutable.List<Array<string>> = Immutable.fromJS([]);
  // this subscription is used to check if there are any requests in progress
  public searchSubscription$: Subscription;
  public inputFormControl = new FormControl();
  public inputSubscription$: Subscription;

  constructor(
    public cityService: SearchCityService
  ) {}

  ngOnInit() {
    this.inputSubscription$ = this.inputFormControl.valueChanges
      .debounceTime(500)
      .subscribe(text => {
        // if there is a request already in progress, discard it
        if (this.searchSubscription$) {
          this.searchSubscription$.unsubscribe();
        }

        this.searchSubscription$ = this.cityService.searchCities(text)
          .subscribe(result => {
            this.handleSearchResult(result);

            // after a successful response, discard the subscription
            this.searchSubscription$.unsubscribe();
          });

        return this.searchSubscription$;
      });
  }

  handleSearchResult(result: Array<Array<string>>): void {
    this.searchResults = Immutable.fromJS(result);
  }

  isSearchActive() {
    return this.searchSubscription$ && !this.searchSubscription$.closed;
  }

  ngOnDestroy() {
    if (this.searchSubscription$) {
      this.searchSubscription$.unsubscribe();
    }
    this.inputSubscription$.unsubscribe();
  }
}

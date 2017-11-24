import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';

import { SearchTypeaheadComponent } from './typeahead.component';
import { SharedInputDirective } from './../../../shared/directives/input/input.directive';
import { SharedFormFieldComponent } from './../../../shared/components/form-field/form-field.component';
import { SharedListElementComponent } from './../../../shared/components/list-element/list-element.component';
import { SharedSpinnerComponent } from './../../../shared/components/spinner/spinner.component';
import { SearchCityService } from './../../services/city.service';
import { SharedTypeaheadComponent } from './../../../shared/components/typeahead/typeahead.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

describe('SearchTypeaheadComponent', () => {
  let component: SearchTypeaheadComponent;
  let fixture: ComponentFixture<SearchTypeaheadComponent>;

  const MOCK_CITY_SERVICE_DELAY = 1;
  const MOCK_CITY_SERVICE_RESPONSE = [['test value 1']];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchTypeaheadComponent,
        SharedInputDirective,
        SharedSpinnerComponent,
        SharedListElementComponent,
        SharedFormFieldComponent,
        SharedTypeaheadComponent
      ],
      providers: [
        {provide: SearchCityService, useValue: {
          searchCities: () => Observable.of(MOCK_CITY_SERVICE_RESPONSE).delay(MOCK_CITY_SERVICE_DELAY)
        }}
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should subscribe to inputFormControl valueChanges onInit', () => {
    spyOn(component.inputFormControl.valueChanges, 'subscribe');
    component.ngOnInit();
    expect(component.inputFormControl.valueChanges.subscribe).toHaveBeenCalledTimes(1);
  });

  it('should unsubscribe from inputFormControl valueChanges onDestroy', () => {
    spyOn(component.inputSubscription$, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.inputSubscription$.unsubscribe).toHaveBeenCalledTimes(1);
  });

  it('should subscribe to cityService searchCities when valueChanges emits a value', fakeAsync(() => {
    component.inputFormControl.setValue('new value');
    expect(component.searchSubscription$).toBeFalsy();
    tick(500);
    expect(component.searchSubscription$).toBeTruthy();
    discardPeriodicTasks();
  }));

  it('should unsubscribe to cityService searchCities when searchCities has a response', fakeAsync(() => {
    component.inputFormControl.setValue('new value');
    tick(500);
    expect(component.searchSubscription$).toBeTruthy();
    spyOn(component.searchSubscription$, 'unsubscribe');
    tick(100);
    expect(component.searchResults).toBeTruthy();
    expect(component.searchSubscription$.unsubscribe).toHaveBeenCalled();
    discardPeriodicTasks();
  }));

  it('should map the searchCities response to an immutable list', fakeAsync(() => {
    component.inputFormControl.setValue('new value');
    tick(500);
    tick(100);
    expect(component.searchResults.toJS()).toEqual(MOCK_CITY_SERVICE_RESPONSE);
    discardPeriodicTasks();
  }));

});

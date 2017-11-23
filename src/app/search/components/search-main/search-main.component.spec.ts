import { SearchTypeaheadComponent } from './../typeahead/typeahead.component';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchMainComponent } from './search-main.component';
import { SearchTypeaheadComponent } from '../typeahead/typeahead.component';
import { TypeaheadComponent } from './../../../shared/components/typeahead/typeahead.component';
import { SpinnerComponent } from './../../../shared/components/spinner/spinner.component';
import { FormFieldComponent } from './../../../shared/components/form-field/form-field.component';
import { CityService } from './../../services/city.service';
import { ListElementComponent } from './../../../shared/components/list-element/list-element.component';

describe('SearchMainComponent', () => {
  let component: SearchMainComponent;
  let fixture: ComponentFixture<SearchMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchMainComponent,
        SearchTypeaheadComponent,
      ],
      providers: [
        {provide: CityService, useValue: {}}
      ]
    })
    .overrideComponent(SearchTypeaheadComponent, {
      set: {
        template: ''
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should put the after-load class on the main element after init', fakeAsync(() => {
    const mainEl = fixture.debugElement.query(By.css('.c-search-main'));
    expect(mainEl.classes).toEqual({'c-search-main': true, 'after-load': false});
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(mainEl.classes).toEqual({'c-search-main': true, 'after-load': true});
    });
  }));
});

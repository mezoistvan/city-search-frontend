import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SearchMainComponent } from './search-main.component';
import { SearchTypeaheadComponent } from '../typeahead/typeahead.component';
import { SearchCityService } from './../../services/city.service';

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
        {provide: SearchCityService, useValue: {}}
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
    const mainEl = fixture.debugElement.query(By.css('.c-search-main__bg-color'));
    expect(mainEl.classes).toEqual({'c-search-main__bg-color': true, 'after-load': false});
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(mainEl.classes).toEqual({'c-search-main__bg-color': true, 'after-load': true});
    });
  }));
});

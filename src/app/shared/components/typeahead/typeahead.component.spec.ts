import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

import { TypeaheadComponent } from './typeahead.component';

describe('TypeaheadComponent', () => {
  let component: TypeaheadComponent;
  let fixture: ComponentFixture<TypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaheadComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('content should should not be visible by default', () => {
    const content = fixture.debugElement.query(By.css('.c-typeahead__content'));
    expect(content).toEqual(null);
    expect(component.isVisible).toEqual(false);
  });
});

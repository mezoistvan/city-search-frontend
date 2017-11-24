import { async, ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SharedTypeaheadComponent } from './typeahead.component';
import { SharedInputDirective } from './../../directives/input/input.directive';

describe('SharedTypeaheadComponent', () => {
  let wrapperComponent: TestSharedTypeaheadWrapperComponent;
  let wrapperFixture: ComponentFixture<TestSharedTypeaheadWrapperComponent>;
  let component: SharedTypeaheadComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SharedTypeaheadComponent,
        TestSharedTypeaheadWrapperComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    wrapperFixture = TestBed.createComponent(TestSharedTypeaheadWrapperComponent);
    wrapperComponent = wrapperFixture.componentInstance;
    component = wrapperFixture.debugElement.query(By.css('sh-typeahead')).componentInstance;
    wrapperFixture.detectChanges();
  });

  it('content should not be visible by default', () => {
    const content = wrapperFixture.debugElement.query(By.css('.c-typeahead__content'));
    expect(content).toEqual(null);
    expect(component.isVisible).toEqual(false);
  });

  it('should subscribe onInit to the input directive isFocused property', () => {
      spyOn(component.shInput.isFocused, 'subscribe');
      component.ngOnInit();
      expect(component.shInput.isFocused.subscribe).toHaveBeenCalledTimes(1);
  });

  it('should set isVisible to shInput.isFocused ', () => {
    component.shInput.isFocused.next(true);
    wrapperFixture.detectChanges();
    expect(component.isVisible).toEqual(true);
  });

  it('should unsubscribe onDestroy to the input directive isFocused property', () => {
    spyOn(component.shInput.isFocused, 'unsubscribe');
    component.ngOnDestroy();
    expect(component.shInput.isFocused.unsubscribe).toHaveBeenCalledTimes(1);
  });
});

@Component({
  template: `<sh-typeahead [shInput]="shInputSpy"></sh-typeahead>`
})
class TestSharedTypeaheadWrapperComponent {
  public shInputSpy: SharedInputDirective;
  constructor() {
    this.shInputSpy = new SharedInputDirective();
  }
}

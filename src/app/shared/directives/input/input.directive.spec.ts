import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputDirective } from './input.directive';

describe('InputDirective', () => {

  let component: TestInputDirectiveComponent;
  let fixture: ComponentFixture<TestInputDirectiveComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestInputDirectiveComponent,
        InputDirective
      ]
    });

    fixture = TestBed.createComponent(TestInputDirectiveComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));

    spyOn(component, 'isFocusedSpy');
  });

  it('emit event on focus event', () => {
    inputEl.triggerEventHandler('focus', null);
    fixture.detectChanges();
    expect(component.isFocusedSpy).toHaveBeenCalledTimes(1);
    expect(component.isFocusedSpy).toHaveBeenCalledWith(true);
  });

  it('emit event on blur event', () => {
    inputEl.triggerEventHandler('blur', null);
    fixture.detectChanges();
    expect(component.isFocusedSpy).toHaveBeenCalledTimes(1);
    expect(component.isFocusedSpy).toHaveBeenCalledWith(false);
  });
});

@Component({
  template: `<input type="text" shInput (isFocused)="isFocusedSpy($event)">`
})
class TestInputDirectiveComponent {
  isFocusedSpy() {}
}

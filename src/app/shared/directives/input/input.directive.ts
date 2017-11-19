import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[shInput]'
})
export class InputDirective {

  focus = false;

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

  @HostListener('input')
  onInput(e) {
    console.log(e);
  }

}

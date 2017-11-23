import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[shInput]'
})
export class InputDirective {

  @Output() isFocused: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener('focus')
  onFocus(): void {
    this.isFocused.emit(true);
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocused.emit(false);
  }

}

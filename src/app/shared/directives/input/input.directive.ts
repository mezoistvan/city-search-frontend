import { Directive, HostListener, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[shInput]'
})
export class InputDirective {

  @Input() shTypeahead;
  @Output() onInputValueChange: EventEmitter<string> = new EventEmitter();
  @Output() isFocused: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private el: ElementRef
  ) {}

  @HostListener('focus')
  onFocus(): void {
    this.isFocused.emit(true);
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocused.emit(false);
  }

}

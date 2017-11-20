import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[shInput]'
})
export class InputDirective {

  @Output() onInputValueChange: EventEmitter<string> = new EventEmitter();

  constructor(
    private el: ElementRef
  ) {}

  @HostListener('input')
  onInput(): void {
    this.onInputValueChange.emit(this.el.nativeElement.value);
  }

}

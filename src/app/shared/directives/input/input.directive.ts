import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Directive({
  selector: '[shInput]',
  exportAs: 'shInput'
})
export class InputDirective {

  @Output() isFocused = new BehaviorSubject<boolean>(false);

  @HostListener('focus')
  onFocus(): void {
    this.isFocused.next(true);
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocused.next(false);
  }

}

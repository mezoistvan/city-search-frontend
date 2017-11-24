import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { InputDirective } from './../../directives/input/input.directive';

@Component({
  selector: 'sh-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit, OnDestroy {

  public isVisible = false;
  @Input() shInput: InputDirective;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.shInput.isFocused.subscribe(isFocused => {
      this.isVisible = isFocused;
      this.changeDetector.detectChanges();
    });
  }

  ngOnDestroy() {
    this.shInput.isFocused.unsubscribe();
  }
}

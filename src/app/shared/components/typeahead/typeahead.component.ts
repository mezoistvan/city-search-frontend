import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { SharedInputDirective } from './../../directives/input/input.directive';

@Component({
  selector: 'sh-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class SharedTypeaheadComponent implements OnInit, OnDestroy {

  public isVisible = false;

  // mandatory input
  @Input() shInput: SharedInputDirective;

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

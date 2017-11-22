import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'sh-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'shTypeahead'
})
export class TypeaheadComponent {

  @Input() isActive = false;

}

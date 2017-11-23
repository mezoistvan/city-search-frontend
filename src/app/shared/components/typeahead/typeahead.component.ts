import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'sh-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypeaheadComponent {

  @Input() isVisible = false;

}

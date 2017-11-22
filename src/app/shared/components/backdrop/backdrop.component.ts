import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sh-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent {

  @Input() isActive = false;

}

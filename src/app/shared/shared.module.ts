import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedListElementComponent } from './components/list-element/list-element.component';
import { SharedSpinnerComponent } from './components/spinner/spinner.component';
import { SharedTypeaheadComponent } from './components/typeahead/typeahead.component';
import { SharedFormFieldComponent } from './components/form-field/form-field.component';
import { SharedInputDirective } from './directives/input/input.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SharedListElementComponent,
    SharedSpinnerComponent,
    SharedTypeaheadComponent,
    SharedFormFieldComponent,
    SharedInputDirective
  ],
  exports: [
    SharedListElementComponent,
    SharedSpinnerComponent,
    SharedTypeaheadComponent,
    SharedFormFieldComponent,
    SharedInputDirective
  ]
})
export class SharedModule { }

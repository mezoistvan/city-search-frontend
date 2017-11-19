import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListElementComponent } from './components/list-element/list-element.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { InputDirective } from './directives/input/input.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListElementComponent,
    SpinnerComponent,
    TypeaheadComponent,
    FormFieldComponent,
    InputDirective
  ],
  exports: [
    ListElementComponent,
    SpinnerComponent,
    TypeaheadComponent,
    FormFieldComponent,
    InputDirective
  ]
})
export class SharedModule { }

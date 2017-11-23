import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTypeaheadComponent } from './components/typeahead/typeahead.component';
import { SearchMainComponent } from './components/search-main/search-main.component';
import { SharedModule } from './../shared/shared.module';
import { CityService } from './services/city.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    SearchTypeaheadComponent,
    SearchMainComponent
  ],
  providers: [
    CityService
  ],
  exports: [
    SearchMainComponent
  ]
})
export class SearchModule { }

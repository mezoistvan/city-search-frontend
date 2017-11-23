import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeaheadComponent } from './components/typeahead/typeahead.component';
import { SearchMainComponent } from './components/search-main/search-main.component';
import { SharedModule } from './../shared/shared.module';
import { CityService } from './services/city.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    TypeaheadComponent,
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

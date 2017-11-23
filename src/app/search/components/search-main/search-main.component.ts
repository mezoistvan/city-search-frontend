import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.scss']
})
export class SearchMainComponent implements OnInit {

  public isLoaded = false;

  ngOnInit() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 0);
  }

}

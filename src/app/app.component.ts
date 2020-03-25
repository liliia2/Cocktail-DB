import { Component, OnInit } from '@angular/core';

import { ICategory } from './models/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Cocktail-DB';
  categoriesForLoad: ICategory[];

  constructor() {  }

  ngOnInit() { }

  onChangedCategories(value: ICategory[]) {
    this.categoriesForLoad = value;
  }
}

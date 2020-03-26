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
  showMenu: boolean = false;

  constructor() {  }

  ngOnInit() { }

  onOpenedMenu(value: boolean):void {
    this.showMenu = value;
  }

  onChangedCategories(value: ICategory[]):void {
    this.categoriesForLoad = value;
    this.showMenu = false;
  }

}

import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { IAppState } from 'src/app/store/state/app.state';
import { ICategory } from 'src/app/models/category';
import { LoadedDrinks } from 'src/app/models/drink';
import { LoadDrinks } from 'src/app/store/actions/drinks.actions';
import { selectDrinks } from 'src/app/store/selectors/drinks.selector';
import { selectCategories } from 'src/app/store/selectors/categories.selector';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit, OnDestroy, OnChanges {
  private subscription = new Subscription();
  @Input() categoriesForLoad: ICategory[];
  allDrinks: LoadedDrinks[] = [];
  currentCategory: string;
  indexOfCurrentCategory: number;
  loadingInProcess = true;
  loadCategory = false;
  screenHeight: number;

  constructor(
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.addCategoriesSub();
    this.addDrinksSub();
  }

  ngOnChanges(): void {
    this.allDrinks = [];
    if (this.categoriesForLoad) {
      this.loadingInProcess = true;
      this.indexOfCurrentCategory = 0;
      this.getDrinks();
      window.scroll(0, 0);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addCategoriesSub(): void {
    const categoriesSub = this.store.select(selectCategories).subscribe(result => {
      if (result && !this.categoriesForLoad) {
        this.categoriesForLoad = result;
        this.indexOfCurrentCategory = 0;
        this.getDrinks();
      }
    });
    this.subscription.add(categoriesSub);
  }

  addDrinksSub(): void {
    const drinksSub = this.store.select(selectDrinks).subscribe(result => {
      if (result) {
        this.loadCategory = false;
        const newItem = {
          category: this.currentCategory,
          drinks: result
        };
        this.allDrinks.push(newItem);
        if (this.indexOfCurrentCategory === this.categoriesForLoad.length - 1) {
          this.loadingInProcess = false;
        }
      }
    });
    this.subscription.add(drinksSub);
  }

  getScreenHeight(event: any): void {
    this.screenHeight = event.view.outerHeight;
  }

  loadNextCategory(): void {
    this.indexOfCurrentCategory++;
    this.getDrinks();
  }

  getDrinks(): void {
    this.currentCategory = this.categoriesForLoad[this.indexOfCurrentCategory].strCategory;
    this.store.dispatch(new LoadDrinks(this.currentCategory));
    this.loadCategory = true;
  }

}

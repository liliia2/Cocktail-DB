import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState } from 'src/app/store/state/app.state';
import { selectCategories } from 'src/app/store/selectors/categories.selector';
import { LoadCategories } from 'src/app/store/actions/categories.actions';
import { ICategory } from 'src/app/models/category';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  categories: ICategory[];
  showedCategories: Array<string>;
  @Output() сhangedCategories = new EventEmitter<ICategory[]>();

  constructor(
    private store: Store<IAppState>
  ) {
    const categoriesSub = this.store.select(selectCategories).subscribe(result => {
      if (result) {
        this.categories = result;
        const arr = [];
        for (const item of this.categories) { arr.push(item.strCategory); }
        this.showedCategories = arr;
      }
    });
    this.subscription.add(categoriesSub);
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadCategories());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  checkCategoryInShowedCategories(category: string): boolean {
    if (this.showedCategories.includes(category)) {
      return true;
    } else { return false; }
  }

  changeShowedCategories(category: string): void {
    if (this.checkCategoryInShowedCategories(category)) {
      this.showedCategories = this.showedCategories.filter(item => item !== category);
    } else { this.showedCategories.push(category); }
  }

  pressApply(): void {
    const categoriesForLoad = this.categories.filter(item => this.checkCategoryInShowedCategories(item.strCategory));
    this.сhangedCategories.emit(categoriesForLoad);
  }

}

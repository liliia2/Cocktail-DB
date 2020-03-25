import { Action } from '@ngrx/store';

import { ICategory } from '../../models/category';

export enum ECategoriesActions {
  LOAD_CATEGORIES = '[CATEGORIES] Load Categories',
  LOAD_CATEGORIES_SUCCESS = '[CATEGORIES] Load Categories Success',
  LOAD_CATEGORIES_FAIL = '[CATEGORIES] Load Categories Fail',
}

export class LoadCategories implements Action {
  readonly type = ECategoriesActions.LOAD_CATEGORIES;
  constructor() { }
}

export class LoadCategoriesSuccess implements Action {
  readonly type = ECategoriesActions.LOAD_CATEGORIES_SUCCESS;
  constructor(public payload: ICategory[]) { }
}

export class LoadCategoriesFail implements Action {
  readonly type = ECategoriesActions.LOAD_CATEGORIES_FAIL;
  constructor(public payload: Error) { }
}

export type CategoriesActions =
  | LoadCategories
  | LoadCategoriesSuccess
  | LoadCategoriesFail;

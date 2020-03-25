import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { categoriesReducers } from './categories.reducers';
import { drinksReducers } from './drinks.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  categories: categoriesReducers,
  drinks: drinksReducers
};

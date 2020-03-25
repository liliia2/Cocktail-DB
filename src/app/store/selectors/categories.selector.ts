import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICategoriesState } from '../state/categories.state';

const categoriesState = (state: IAppState) => state.categories;

export const selectCategories = createSelector(
    categoriesState,
    (state: ICategoriesState) => state.categories
);

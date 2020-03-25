import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IDrinksState } from '../state/drinks.state';

const drinksState = (state: IAppState) => state.drinks;

export const selectDrinks = createSelector(
    drinksState,
    (state: IDrinksState) => state.drinks
);

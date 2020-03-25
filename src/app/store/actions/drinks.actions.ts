import { Action } from '@ngrx/store';

import { IDrink } from '../../models/drink';

export enum EDrinksActions {
  LOAD_DRINKS = '[DRINKS] Load Drinks',
  LOAD_DRINKS_SUCCESS = '[DRINKS] Load Drinks Success',
  LOAD_DRINKS_FAIL = '[DRINKS] Load Drinks Fail',
}

export class LoadDrinks implements Action {
  readonly type = EDrinksActions.LOAD_DRINKS;
  constructor(public payload: string) { }
}

export class LoadDrinksSuccess implements Action {
  readonly type = EDrinksActions.LOAD_DRINKS_SUCCESS;
  constructor(public payload: IDrink[]) { }
}

export class LoadDrinksFail implements Action {
  readonly type = EDrinksActions.LOAD_DRINKS_FAIL;
  constructor(public payload: Error) { }
}

export type DrinksActions =
  | LoadDrinks
  | LoadDrinksSuccess
  | LoadDrinksFail;

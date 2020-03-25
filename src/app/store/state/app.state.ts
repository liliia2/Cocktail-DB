import { initialCategoriesState, ICategoriesState } from './categories.state';
import { IDrinksState, initialDrinksState } from './drinks.state';

export interface IAppState {
  categories: ICategoriesState;
  drinks: IDrinksState;
}

export const initialAppState: IAppState = {
  categories: initialCategoriesState,
  drinks: initialDrinksState
};

export function getInitialState(): IAppState {
  return initialAppState;
}

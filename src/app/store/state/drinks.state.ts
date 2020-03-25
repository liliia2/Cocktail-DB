import { IDrink } from 'src/app/models/drink';

export interface IDrinksState {
    drinks: IDrink[];
    loading: boolean;
    error: Error;
}

export const initialDrinksState: IDrinksState = {
    drinks: null,
    loading: false,
    error: null
};

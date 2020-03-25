import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { DrinksGet } from '../../models/drink';
import { CocktailService } from '../../service/cocktail.service';
import {
    EDrinksActions,
    LoadDrinks,
    LoadDrinksSuccess,
    LoadDrinksFail
} from '../actions/drinks.actions';

@Injectable()
export class DrinksEffects {
    @Effect()
    loadDrinks$ = this.actions$.pipe(
        ofType<LoadDrinks>(EDrinksActions.LOAD_DRINKS),
        switchMap((action) => {
            return this.cocktailService.getDrinksByCategory(action.payload).pipe(
                mergeMap(result => {
                    return [new LoadDrinksSuccess(result.drinks)];
                }),
                catchError((error: Error) => {
                  return of(new LoadDrinksFail(error));
                })
            );
          })
    );

    constructor(
        private cocktailService: CocktailService,
        private actions$: Actions
    ) {}
}

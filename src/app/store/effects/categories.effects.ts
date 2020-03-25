import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { CategoriesGet } from '../../models/category';
import { CocktailService } from '../../service/cocktail.service';
import {
    ECategoriesActions,
    LoadCategories,
    LoadCategoriesSuccess,
    LoadCategoriesFail
} from '../actions/categories.actions';

@Injectable()
export class CategoriesEffects {
    @Effect()
    loadCategories$ = this.actions$.pipe(
        ofType<LoadCategories>(ECategoriesActions.LOAD_CATEGORIES),
        switchMap(() => this.cocktailService.getCategories()),
        switchMap((categoriesGet: CategoriesGet) => {
            return of(new LoadCategoriesSuccess(categoriesGet.drinks));
        }),
        catchError((error: Error) => {
            return of(new LoadCategoriesFail(error));
        })
    );

    constructor(
        private cocktailService: CocktailService,
        private actions$: Actions
    ) {}
}

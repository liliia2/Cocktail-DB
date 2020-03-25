import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FiltersComponent } from './modules/filters/filters.component';
import { CocktailsComponent } from './modules/cocktails/cocktails.component';
import { categoriesReducers } from './store/reducers/categories.reducers';
import { CategoriesEffects } from './store/effects/categories.effects';
import { DrinksEffects } from './store/effects/drinks.effects';
import { drinksReducers } from './store/reducers/drinks.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    CocktailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      categories: categoriesReducers,
      drinks: drinksReducers
    }),
    EffectsModule.forRoot([
      CategoriesEffects,
      DrinksEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

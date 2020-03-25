import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesGet } from '../models/category';
import { LoadedDrinks } from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
    key = 'c';

    constructor(private http: HttpClient) { }

    getDrinksByCategory(category: string): Observable<LoadedDrinks> {
        return this.http.get<any>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?' + this.key + '=' + category);
    }

    getCategories(): Observable<CategoriesGet> {
        const value = 'list';
        return this.http.get<CategoriesGet>('https://www.thecocktaildb.com/api/json/v1/1/list.php?' + this.key + '=' + value);
    }

}

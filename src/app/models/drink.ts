export interface LoadedDrinks {
  category: string;
  drinks: IDrink[];
}

export interface DrinksGet {
  drinks: IDrink[];
}

export interface IDrink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

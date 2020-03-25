import { ICategory } from 'src/app/models/category';

export interface ICategoriesState {
    categories: ICategory[];
    loading: boolean;
    error: Error;
}

export const initialCategoriesState: ICategoriesState = {
    categories: null,
    loading: false,
    error: null
};

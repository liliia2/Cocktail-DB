import { CategoriesActions, ECategoriesActions } from '../actions/categories.actions';
import { initialCategoriesState, ICategoriesState } from '../state/categories.state';

export const categoriesReducers = (
    state = initialCategoriesState,
    action: CategoriesActions
): ICategoriesState => {
    switch (action.type) {
        case ECategoriesActions.LOAD_CATEGORIES: {
            return {
                ...state,
                categories: null
            };
        }
        case ECategoriesActions.LOAD_CATEGORIES_SUCCESS: {
            return {
                ...state,
                categories: action.payload,
                loading: true
            };
        }
        case ECategoriesActions.LOAD_CATEGORIES_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }
        default:
            return state;
    }
};

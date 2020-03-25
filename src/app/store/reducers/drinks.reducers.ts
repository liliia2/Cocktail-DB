import { DrinksActions, EDrinksActions } from '../actions/drinks.actions';
import { initialDrinksState, IDrinksState } from '../state/drinks.state';

export const drinksReducers = (
    state = initialDrinksState,
    action: DrinksActions
): IDrinksState => {
    switch (action.type) {
        case EDrinksActions.LOAD_DRINKS: {
            return {
                ...state,
                drinks: null
            };
        }
        case EDrinksActions.LOAD_DRINKS_SUCCESS: {
            return {
                ...state,
                drinks: action.payload,
                loading: true
            };
        }
        case EDrinksActions.LOAD_DRINKS_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }
        default:
            return state;
    }
};

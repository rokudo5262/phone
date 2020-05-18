import * as CategoriesReducer from './categories.reducer';
import { combineReducers, Action } from '@ngrx/store';
import { CategoriesState } from '../states';

export {
    CategoriesReducer,
};
export const FeatureKey = 'categories';

export interface State {
    [CategoriesReducer.categoriesFeatureKey]: CategoriesState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [CategoriesReducer.categoriesFeatureKey]: CategoriesReducer.reducer,
    })(state, action);
}

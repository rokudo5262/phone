import * as ProductsReducer from './products.reducer';
import { combineReducers, Action } from '@ngrx/store';
import { ProductsState } from '../states/products.state';

export {
    ProductsReducer,
};
export const FeatureKey = 'products';

export interface State {
    [ProductsReducer.productsFeatureKey]: ProductsState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [ProductsReducer.productsFeatureKey]: ProductsReducer.reducer,
    })(state, action);
}

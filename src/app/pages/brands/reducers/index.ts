import * as BrandsReducer from './brands.reducer';
import { combineReducers, Action } from '@ngrx/store';
import { BrandsState } from '../states/brands.state';

export {
    BrandsReducer,
};
export const FeatureKey = 'brands';

export interface State {
    [BrandsReducer.brandsFeatureKey]: BrandsState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [BrandsReducer.brandsFeatureKey]: BrandsReducer.reducer,
    })(state, action);
}

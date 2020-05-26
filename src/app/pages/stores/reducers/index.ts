import * as StoresReducer from './stores.reducer';
import { combineReducers, Action } from '@ngrx/store';
import { StoresState } from '../states/stores.state';

export {
    StoresReducer,
};
export const FeatureKey = 'stores';

export interface State {
    [StoresReducer.storesFeatureKey]: StoresState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [StoresReducer.storesFeatureKey]: StoresReducer.reducer,
    })(state, action);
}

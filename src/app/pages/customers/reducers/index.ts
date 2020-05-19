import * as CustomersReducer from './customers.reducer';
import { combineReducers, Action } from '@ngrx/store';

export {
    CustomersReducer,
};
export const FeatureKey = 'customers';

export interface State {
    [CustomersReducer.customersFeatureKey]: CustomersState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [CustomersReducer.CustomersReducer]: CustomersReducer.reducer,
    })(state, action);
}

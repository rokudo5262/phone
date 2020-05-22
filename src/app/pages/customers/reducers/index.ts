import * as CustomersReducer from './customers.reducer';
import { combineReducers, Action } from '@ngrx/store';
import { CustomersState } from '../states/customers.state';

export {
    CustomersReducer,
};
export const FeatureKey = 'customers';

export interface State {
    [CustomersReducer.customersFeatureKey]: CustomersState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [CustomersReducer.customersFeatureKey]: CustomersReducer.reducer,
    })(state, action);
}

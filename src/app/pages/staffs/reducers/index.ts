import * as StaffsReducer from './staffs.reducer';
import { combineReducers, Action } from '@ngrx/store';
import { StaffsState } from '../states/staffs.state';

export {
    StaffsReducer,
};
export const FeatureKey = 'staffs';

export interface State {
    [StaffsReducer.staffsFeatureKey]: StaffsState;
}

export function reducer(state: State | undefined, action: Action) {
    return combineReducers({
        [StaffsReducer.staffsFeatureKey]: StaffsReducer.reducer,
    })(state, action);
}

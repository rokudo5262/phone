import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectCustomersState = createFeatureSelector<State>(FeatureKey);

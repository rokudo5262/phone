import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectStaffsState = createFeatureSelector<State>(FeatureKey);

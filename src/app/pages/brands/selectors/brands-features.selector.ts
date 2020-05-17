import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectBrandsState = createFeatureSelector<State>(FeatureKey);

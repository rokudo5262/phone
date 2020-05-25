import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectProductsState = createFeatureSelector<State>(FeatureKey);

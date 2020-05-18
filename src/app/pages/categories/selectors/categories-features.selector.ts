import { createFeatureSelector } from '@ngrx/store';
import { State, FeatureKey } from '../reducers';

export const selectCategoriesState = createFeatureSelector<State>(FeatureKey);

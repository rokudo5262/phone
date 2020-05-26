import { createAction, props } from '@ngrx/store';
import { IStore } from '../../../@core/data';

/**
 * Load Stores Api Actions
 */
export const loadStoresSuccess = createAction(
  '[Store/API] Load Store Success',
  props<{ stores: IStore[] }>(),
);
export const loadStoresFailure = createAction(
  '[Store/API] Load Stores Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add Store Api Actions
 */
export const addStoreSuccess = createAction(
  '[Store/API] Add Store Success',
  props<{ store: IStore }>(),
);

export const addStoreFailure = createAction(
  '[Store/API] Add Store Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Store Api Actions
 */
export const updateStoreSuccess = createAction(
  '[Store/API] Update Store Success',
);
export const updateStoreFailure = createAction(
  '[Store/API] Update Store Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete Store Api Actions
 */
export const deleteStoreSuccess = createAction(
  '[Store/API] Delete Store Success',
);
export const deleteStoreFailure = createAction(
  '[Store/API] Delete Store Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Store Api Actions
 */
export const removeStoreSuccess = createAction(
  '[Store/API] Remove Store Success',
  props<{ storeId: number }>(),
);
export const removeStoreFailure = createAction(
  '[Store/API] Remove Store Failure',
  props<{ errorMsg: any }>(),
);



import { createAction, props } from '@ngrx/store';
import { ICategory } from '../../../@core/data/categories';

/**
 * Load Categories Api Actions
 */
export const loadCategoriesSuccess = createAction(
  '[Category/API] Load Categories Success',
  props<{ categories: ICategory[] }>(),
);
export const loadCategoriesFailure = createAction(
  '[Category/API] Load Categories Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Get Category Detail Api Actions
 */
export const getCategoryDetailSuccess = createAction(
  '[Category/API] Get Category Detail Success',
  props<{ category: ICategory }>(),
);
export const getCategoryDetailFailure = createAction(
  '[Category/API] Get Category Detail Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add Category Api Actions
 */
export const addCategorySuccess = createAction(
  '[Category/API] Add Category Success',
  props<{ category: ICategory }>(),
);

export const addCategoryFailure = createAction(
  '[Category/API] Add Category Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Category Api Actions
 */
export const updateCategorySuccess = createAction(
  '[Category/API] Update Category Success',
);
export const updateCategoryFailure = createAction(
  '[Category/API] Update Category Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete Category Api Actions
 */
export const deleteCategorySuccess = createAction(
  '[Category/API] Delete Category Success',
);
export const deleteCategoryFailure = createAction(
  '[Category/API] Delete Category Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Category Api Actions
 */
export const removeCategorySuccess = createAction(
  '[Category/API] Remove Category Success',
  props<{ categoryId: number }>(),
);
export const removeCategoryFailure = createAction(
  '[Category/API] Remove Category Failure',
  props<{ errorMsg: any }>(),
);

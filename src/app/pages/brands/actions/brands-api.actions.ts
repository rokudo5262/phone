import { createAction, props } from '@ngrx/store';
import { IBrand } from '../../../@core/data';

/**
 * Load Brands Api Actions
 */
export const loadBrandsSuccess = createAction(
    '[Brand/API] Load Brands Success',
    props<{ brands: IBrand[] }>(),
);
export const loadBrandsFailure = createAction(
    '[Brand/API] Load Brands Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Add Brand Api Actions
 */
export const addBrandSuccess = createAction(
    '[Brand/API] Add Brand Success',
    props<{ brand: IBrand }>(),
);

export const addBrandFailure = createAction(
    '[Brand/API] Add Brand Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Brand Api Actions
 */
export const updateBrandSuccess = createAction(
    '[Brand/API] Update Brand Success',
);
export const updateBrandFailure = createAction(
    '[Brand/API] Update Brand Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Delete Brand Api Actions
 */
export const deleteBrandSuccess = createAction(
    '[Brand/API] Delete Brand Success',
);
export const deleteBrandFailure = createAction(
    '[Brand/API] Delete Brand Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Remove Brand Api Actions
 */
export const removeBrandSuccess = createAction(
    '[Brand/API] Remove Brand Success',
    props<{ brand_id: number }>(),
);
export const removeBrandFailure = createAction(
    '[Brand/API] Remove Brand Failure',
    props<{ errorMsg: any }>(),
);

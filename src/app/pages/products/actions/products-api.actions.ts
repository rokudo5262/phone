import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../../@core/data/products';

/**
 * Load Products Api Actions
 */
export const loadProductsSuccess = createAction(
  '[Product/API] Load Product Success',
  props<{ products: IProduct[] }>(),
);
export const loadProductsFailure = createAction(
  '[Product/API] Product Products Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Get Product Detail Api Actions
 */
export const getProductDetailSuccess = createAction(
  '[Product/API] Get Product Detail Success',
  props<{ product: IProduct }>(),
);
export const getProductDetailFailure = createAction(
  '[Product/API] Get Product Detail Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add Product Api Actions
 */
export const addProductSuccess = createAction(
  '[Product/API] Add Product Success',
  props<{ product: IProduct }>(),
);

export const addProductFailure = createAction(
  '[Product/API] Add Product Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Product Api Actions
 */
export const updateProductSuccess = createAction(
  '[Product/API] Update Product Success',
);
export const updateProductFailure = createAction(
  '[Product/API] Update Product Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete Product Api Actions
 */
export const deleteProductSuccess = createAction(
  '[Product/API] Delete Product Success',
);
export const deleteProductFailure = createAction(
  '[Product/API] Delete Product Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Product Api Actions
 */
export const removeProductSuccess = createAction(
  '[Product/API] Remove Product Success',
  props<{ productId: number }>(),
);
export const removeProductFailure = createAction(
  '[Product/API] Remove Product Failure',
  props<{ errorMsg: any }>(),
);

import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IProduct } from '../../../@core/data/products';

export const loadProducts = createAction(
  '[Product/API] Load Products',
  props<{ products: IProduct[] }>(),
);

export const getProductDetail = createAction(
  '[Product/API] Get Product Detail',
  props<{ product: IProduct }>(),
);

export const addProduct = createAction(
  '[Product/API] Add Product',
  props<{ product: IProduct }>(),
);

export const updateProduct = createAction(
  '[Product/API] Update Product',
  props<{ update: Update<IProduct> }>(),
);

export const deleteProduct = createAction(
  '[Product/API] Delete Product',
  props<{ update: Update<IProduct> }>(),
);

export const removeProduct = createAction(
  '[Product/API] Remove Product',
  props<{ productId: number }>(),
);

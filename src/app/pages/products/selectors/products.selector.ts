import { createSelector } from '@ngrx/store';
import { selectProductsState } from './products-features.selector';
import { ProductsReducer } from '../reducers';
import { productAdapter } from '../states';

export const selectProductEntitiesState = createSelector(
  selectProductsState,
  state => state[ProductsReducer.productsFeatureKey],
);

export const {
  selectIds: selectProductIds,
  selectEntities: selectProductEntities,
  selectAll: selectAllProducts,
  selectTotal: selectTotalProducts,
} = productAdapter.getSelectors(selectProductEntitiesState);

export const ProductsSelector = {
  selectProductEntitiesState,
  selectProductIds,
  selectProductEntities,
  selectAllProducts,
  selectTotalProducts,
};
export const selectCurrentProduct = (productId) => createSelector(
  selectProductEntities,
  (product) => product[productId],
);

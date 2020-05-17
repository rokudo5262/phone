import { createSelector } from '@ngrx/store';
import { selectBrandsState } from './brands-features.selector';
import { BrandsReducer } from '../reducers';
import { brandAdapter } from '../states/brands.state';

export const selectBrandEntitiesState = createSelector(
  selectBrandsState,
  state => state[BrandsReducer.brandsFeatureKey],
);

export const {
  selectIds: selectBrandIds,
  selectEntities: selectBrandEntities,
  selectAll: selectAllBrands,
  selectTotal: selectTotalBrands,
} = brandAdapter.getSelectors(selectBrandEntitiesState);

export const RoomGroupSelectors = {
  selectBrandEntitiesState,
  selectBrandIds,
  selectBrandEntities,
  selectAllBrands,
  selectTotalBrands,
};
export const selectCurrentBrand = (brand_id) => createSelector(
  selectBrandEntities,
  (brand) => brand[brand_id]
);

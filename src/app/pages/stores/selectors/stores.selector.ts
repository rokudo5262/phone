import { createSelector } from '@ngrx/store';
import { selectStoresState } from './stores-features.selector';
import { StoresReducer } from '../reducers';
import { storeAdapter } from '../states';


export const selectStoreEntitiesState = createSelector(
  selectStoresState,
  state => state[StoresReducer.storesFeatureKey],
);

export const {
  selectIds: selectStoreIds,
  selectEntities: selectStoreEntities,
  selectAll: selectAllStores,
  selectTotal: selectTotalStores,
} = storeAdapter.getSelectors(selectStoreEntitiesState);

export const StoresSelector = {
  selectStoreEntitiesState,
  selectStoreIds,
  selectStoreEntities,
  selectAllStores,
  selectTotalStores,
};
export const selectCurrentStore = (orderCode) => createSelector(
  selectStoreEntities,
  (order) => order[orderCode],
);

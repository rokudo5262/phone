import { createReducer, on } from '@ngrx/store';
import { StoresActions, StoresApiActions } from '../actions';
import { storeInitialState, storeAdapter } from '../states/stores.state';

export const storesFeatureKey = 'stores';

export const reducer = createReducer(
    storeInitialState,
    on(
        StoresActions.loadStores,
        StoresApiActions.loadStoresSuccess,
        (state, { stores }) => {
            return storeAdapter.addMany(stores, state);
        },
    ),
    on(
        StoresActions.getStoreDetail,
        StoresApiActions.getStoreDetailSuccess,
        (state, { store }) => {
            return storeAdapter.addOne(store, state);
        },
    ),
    on(
        StoresActions.addStore,
        StoresApiActions.addStoreSuccess,
        (state, { store }) => storeAdapter.addOne(store, state),
    ),
    on(
        StoresActions.updateStore,
        (state, { update }) => storeAdapter.updateOne(update, state),
    ),
    on(
        StoresActions.deleteStore,
        (state, { update }) => storeAdapter.updateOne(update, state),
    ),
);

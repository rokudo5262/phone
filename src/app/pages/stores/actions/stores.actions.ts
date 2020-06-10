import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IStore } from '../../../@core/data/stores';

export const loadStores = createAction(
  '[Store/API] Load Stores',
  props<{ stores: IStore[] }>(),
);

export const getStoreDetail = createAction(
  '[Store/API] Get Store Detail',
  props<{ store: IStore }>(),
);

export const addStore = createAction(
  '[Store/API] Add Store',
  props<{ store: IStore }>(),
);

export const updateStore = createAction(
  '[Store/API] Update Store',
  props<{ update: Update<IStore> }>(),
);

export const deleteStore = createAction(
  '[Store/API] Delete Store',
  props<{ update: Update<IStore> }>(),
);

export const removeStore = createAction(
  '[Store/API] Remove Store',
  props<{ storeId: number }>(),
);

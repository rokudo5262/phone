import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { IStore } from '../../../@core/data/stores';


export interface StoresState extends EntityState<IStore> {
  selectedStoreID: number | null;
}
export const storeAdapter: EntityAdapter<IStore> = createEntityAdapter<IStore>({
  selectId: (store: IStore) => store.storeId,
  sortComparer: null,
});

export const storeInitialState: StoresState = storeAdapter.getInitialState({
  selectedStoreID: null,
  entities: {
    0: { },
  },
});

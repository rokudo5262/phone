import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IBrand } from '../../../@core/data/brands';

export interface BrandsState extends EntityState<IBrand> {
    selectedBrandID: number | string | null;
}
export const brandAdapter: EntityAdapter<IBrand> = createEntityAdapter<IBrand>({
    selectId: (brand: IBrand) => brand.brand_id,
    sortComparer: null,
});

export const brandInitialState: BrandsState = brandAdapter.getInitialState({
    selectedBrandID: null,
    entities: {
        0: {
            brand_id:'0',
            brand_name:'name',
            status:'',
        },
    },
    ids:[1],
});

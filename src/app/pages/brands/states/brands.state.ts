import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IBrand } from '../../../@core/data/brands';

export interface BrandsState extends EntityState<IBrand> {
    selectedBrandID: number | string | null;
}
export function sortByBrandName(brand1: IBrand, brand2: IBrand): number {
    return brand1.brandName.localeCompare(brand2.brandName);
}
export const brandAdapter: EntityAdapter<IBrand> = createEntityAdapter<IBrand>({
    selectId: (brand: IBrand) => brand.brandId,
    sortComparer: sortByBrandName,
});

export const brandInitialState: BrandsState = brandAdapter.getInitialState({
    selectedBrandID: null,
    entities: {
        0: {},
    },
});

import { createReducer, on } from '@ngrx/store';
import { BrandsActions, BrandssApiActions } from '../actions';
import { brandAdapter, brandInitialState } from '../states/brands.state';

export const brandsFeatureKey = 'brands';

export const reducer = createReducer(
    brandInitialState,
    on(
        BrandsActions.loadBrands,
        BrandssApiActions.loadBrandsSuccess,
        (state, { brands }) => {
            brands = brands.filter(x => x.deleted === false);
            return brandAdapter.addMany(brands, state);
        },
    ),
    on(
        BrandsActions.addBrand,
        BrandssApiActions.addBrandSuccess,
        (state, { brand }) => brandAdapter.addOne(brand, state),
    ),
    on(
        BrandsActions.updateBrand,
        (state, { update }) => brandAdapter.updateOne(update, state),
    ),
    on(
        BrandsActions.deleteBrand,
        (state, { update }) => brandAdapter.updateOne(update, state),
    ),
    on(
        BrandsActions.removeBrand,
        BrandssApiActions.removeBrandSuccess,
        (state, { brand_id }) => brandAdapter.removeOne(brand_id, state),
    ),
);

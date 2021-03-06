import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IBrand } from '../../../@core/data/brands';

export const loadBrands = createAction(
    '[Brand/API] Load Brands',
    props<{ brands: IBrand[] }>(),
);

export const getBrandDetail = createAction(
    '[Brand/API] Get Brand Detail',
    props<{ brand: IBrand }>(),
);

export const addBrand = createAction(
    '[Brand/API] Add Brand',
    props<{ brand: IBrand }>(),
);

export const updateBrand = createAction(
    '[Brand/API] Update Brand',
    props<{ update: Update<IBrand> }>(),
);

export const deleteBrand = createAction(
    '[Brand/API] Delete Brand',
    props<{ update: Update<IBrand> }>(),
);

export const removeBrand = createAction(
    '[Brand/API] Remove Brand',
    props<{ brandId: number }>(),
);

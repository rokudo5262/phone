import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IBrand } from '../../../@core/data';

export const loadBrands = createAction(
    '[Brand/API] Load Brands',
    props<{ brands: IBrand[] }>(),
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
    props<{ brand_id: number }>(),
);

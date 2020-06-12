import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ICategory } from '../../../@core/data/categories';

export const loadCategories = createAction(
  '[Category/API] Load Categories',
  props<{ categories: ICategory[] }>(),
);

export const getCategoryDetail = createAction(
  '[Category/API] Get Category Detail',
  props<{ category: ICategory }>(),
);

export const addCategory = createAction(
  '[Category/API] Add Category',
  props<{ category: ICategory }>(),
);

export const updateCategory = createAction(
  '[Category/API] Update Category',
  props<{ update: Update<ICategory> }>(),
);

export const deleteCategory = createAction(
  '[Category/API] Delete Category',
  props<{ update: Update<ICategory> }>(),
);

export const removeCategory = createAction(
  '[Category/API] Remove Category',
  props<{ categoryId: number }>(),
);

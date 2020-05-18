import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ICategory } from '../../../@core/data/categories';

export interface CategoriesState extends EntityState<ICategory> {
  selectedCategoriesID: number | string | null;
}

export const categoryAdapter: EntityAdapter<ICategory> = createEntityAdapter<ICategory>({
  selectId: (category: ICategory) => category.category_id,
  sortComparer: null,
});

export const categoryInitialState: CategoriesState = categoryAdapter.getInitialState({
  selectedCategoriesID: null,
  entities: {
    0: {},
  },
});

import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ICategory } from '../../../@core/data/categories';

export interface CategoriesState extends EntityState<ICategory> {
  selectedCategoriesID: number | string | null;
}
export function sortByCategoryName(category1: ICategory, category2: ICategory): number {
  return category1.categoryName.localeCompare(category2.categoryName);
}
export const categoryAdapter: EntityAdapter<ICategory> = createEntityAdapter<ICategory>({
  selectId: (category: ICategory) => category.categoryId,
  sortComparer: sortByCategoryName,
});

export const categoryInitialState: CategoriesState = categoryAdapter.getInitialState({
  selectedCategoriesID: null,
  entities: {
    0: {},
  },
});

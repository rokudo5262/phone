import { createSelector } from '@ngrx/store';
import { categoryAdapter } from '../states/categories.state';
import { selectCategoriesState } from './categories-features.selector';
import { CategoriesReducer } from '../reducers';

export const selectCategoryEntitiesState = createSelector(
  selectCategoriesState,
  state => state[CategoriesReducer.categoriesFeatureKey],
);

export const {
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectAll: selectAllCategories,
  selectTotal: selectTotalCategories,
} = categoryAdapter.getSelectors(selectCategoryEntitiesState);

export const CategoriesSelector = {
  selectCategoryEntitiesState,
  selectCategoryIds,
  selectCategoryEntities,
  selectAllCategories,
  selectTotalCategories,
};
export const selectCurrentCategory = (categoryId) => createSelector(
  selectCategoryEntities,
  (category) => category[categoryId],
);

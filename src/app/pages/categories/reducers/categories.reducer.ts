import { createReducer, on } from '@ngrx/store';
import { categoryInitialState, categoryAdapter } from '../states/categories.state';
import { CategoriesActions, CategoriesApiActions } from '../actions';

export const categoriesFeatureKey = 'categories';

export const reducer = createReducer(
    categoryInitialState,
    on(
        CategoriesActions.loadCategories,
        CategoriesApiActions.loadCategoriesSuccess,
        (state, { categories }) => {
            return categoryAdapter.addMany(categories, state);
        },
    ),
    on(
        CategoriesActions.getCategoryDetail,
        CategoriesApiActions.getCategoryDetailSuccess,
        (state, { category }) =>  {
            return categoryAdapter.addOne(category, state);
        },
    ),
    on(
        CategoriesActions.addCategory,
        CategoriesApiActions.addCategorySuccess,
        (state, { category }) => categoryAdapter.addOne(category, state),
    ),
    on(
        CategoriesActions.updateCategory,
        (state, { update }) => categoryAdapter.updateOne(update, state),
    ),
    on(
        CategoriesActions.deleteCategory,
        (state, { update }) => categoryAdapter.updateOne(update, state),
    ),
    on(
        CategoriesActions.removeCategory,
        CategoriesApiActions.removeCategorySuccess,
        (state, { categoryId }) => categoryAdapter.removeOne(categoryId, state),
    ),
);

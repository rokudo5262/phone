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
            categories = categories.filter(x => x.deleted === false);
            return categoryAdapter.addMany(categories, state);
        }
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
        (state, { category_id }) => categoryAdapter.removeOne(category_id, state),
    ),
);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { CategoriesService } from '../services/categories.service';
import { of, empty } from 'rxjs';
import { CategoriesActions, CategoriesApiActions } from '../actions';
import { ICategory } from '../../../@core/data';

@Injectable()
export class CategoriesEffects {
    load$ = createEffect(() => this.action$.pipe(
        ofType(CategoriesActions.loadCategories),
        mergeMap(() => this.categoriesservice.load_categories()
            .pipe(
                map((items: ICategory[]) => CategoriesApiActions
                    .loadCategoriesSuccess({ categories: items })),
                catchError(err => of(CategoriesApiActions
                    .loadCategoriesFailure({ errorMsg: err.message }))),
            )),
    ));
    detail$ = createEffect(() => this.action$.pipe(
        ofType(CategoriesActions.getCategoryDetail),
        mergeMap(() => this.categoriesservice.get_category_detail()
            .pipe(
                map((item: ICategory) => CategoriesApiActions
                    .getCategoryDetailSuccess({ category: item })),
                catchError(err => of(CategoriesApiActions
                    .getCategoryDetailFailure({ errorMsg: err.message }))),
            )),
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(CategoriesActions.addCategory),
        switchMap(({ category }) =>
            this.categoriesservice.add_category(category).pipe(
                map((item: ICategory) => CategoriesApiActions
                    .addCategorySuccess({ category: item })),
                catchError(error => of(CategoriesApiActions
                    .addCategoryFailure({ errorMsg: error.message }))),
            )),
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(CategoriesActions.updateCategory),
        switchMap(({ update }) =>
            this.categoriesservice.update_category(update.changes).pipe(
                map(item => CategoriesApiActions
                    .updateCategorySuccess()),
                catchError(error => of(CategoriesApiActions
                    .updateCategoryFailure({ errorMsg: error.message }))),
            )),
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(CategoriesActions.deleteCategory),
        switchMap(({ update }) =>
            this.categoriesservice.delete_category(update.changes).pipe(
                map(item => CategoriesApiActions
                    .deleteCategorySuccess()),
                catchError(error => of(CategoriesApiActions
                    .deleteCategoryFailure({ errorMsg: error.message }))),
            )),
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(CategoriesActions.removeCategory),
        switchMap(({ categoryId }) => {
            if (categoryId <= 0) {
                return empty;
            }
            return this.categoriesservice.remove_category(categoryId).pipe(
                map((item: ICategory) => CategoriesApiActions
                    .removeCategorySuccess({ categoryId: item ? item.categoryId : 0 })),
                catchError(err => of(CategoriesApiActions
                    .removeCategoryFailure({ errorMsg: err.message }))),
            );
        }),
    ));
    constructor(
        private action$: Actions,
        private categoriesservice: CategoriesService,
    ) { }
}

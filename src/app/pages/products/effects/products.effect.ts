import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';
import { ProductsService } from '../services/products.service';
import { ProductsActions, ProductsApiActions } from '../actions';
import { IProduct } from '../../../@core/data/products';

@Injectable()
export class ProductsEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(ProductsActions.loadProducts),
        mergeMap(() => this.productsService.load_products()
            .pipe(
                map((items: IProduct[]) => ProductsApiActions
                    .loadProductsSuccess({ products: items })),
                catchError(err => of(ProductsApiActions
                    .loadProductsFailure({ errorMsg: err.message }))),
            )),
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(ProductsActions.addProduct),
        switchMap(({ product }) =>
            this.productsService.add_product(product).pipe(
                map((item: IProduct) => ProductsApiActions
                    .addProductSuccess({ product: item })),
                catchError(error => of(ProductsApiActions
                    .addProductFailure({ errorMsg: error.message }))),
            )),
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(ProductsActions.removeProduct),
        switchMap(({ productId }) => {
            if (productId <= 0) {
                return empty;
            }
            return this.productsService.remove_product(productId).pipe(
                map((item: IProduct) => ProductsApiActions
                    .removeProductSuccess({ productId: item ? item.productId : 0 })),
                catchError(err => of(ProductsApiActions
                    .removeProductFailure({ errorMsg: err.message }))),
            );
        }),
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(ProductsActions.updateProduct),
        switchMap(({ update }) =>
            this.productsService.update_product(update.changes).pipe(
                map(item =>
                    ProductsApiActions.updateProductSuccess()),
                catchError(error => of(
                    ProductsApiActions.updateProductFailure({ errorMsg: error.message }))),
            )),
    ));
    constructor(
        private action$: Actions,
        private productsService: ProductsService,
    ) { }
}

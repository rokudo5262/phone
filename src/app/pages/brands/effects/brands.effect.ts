import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { BrandsActions, BrandssApiActions } from '../actions';
import { IBrand } from '../../../@core/data';
import { BrandsService } from '../services';
import { empty, of } from 'rxjs';

@Injectable()
export class BrandsEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(BrandsActions.loadBrands),
        mergeMap(() => this.bransService.load_brands()
            .pipe(
                map((items: IBrand[]) => BrandssApiActions
                    .loadBrandsSuccess({ brands: items })),
                catchError(err => of(BrandssApiActions
                    .loadBrandsFailure({ errorMsg: err.message }))),
            )),
    ));
    detail$ = createEffect(() => this.action$.pipe(
        ofType(BrandsActions.getBrandDetail),
        mergeMap(() => this.bransService.get_brand_detail()
            .pipe(
                map((item: IBrand) => BrandssApiActions
                    .getBrandDetailSuccess({ brand: item })),
                catchError(err => of(BrandssApiActions
                    .getBrandDetailFailure({ errorMsg: err.message }))),
            )),
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(BrandsActions.addBrand),
        switchMap(({ brand }) =>
            this.bransService.add_brand(brand).pipe(
                map((item: IBrand) => BrandssApiActions
                    .addBrandSuccess({ brand: item })),
                catchError(error => of(BrandssApiActions
                    .addBrandFailure({ errorMsg: error.message }))),
            )),
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(BrandsActions.updateBrand),
        switchMap(({ update }) =>
            this.bransService.update_brand(update.changes).pipe(
                map(item =>
                    BrandssApiActions.updateBrandSuccess()),
                catchError(error => of(
                    BrandssApiActions.updateBrandFailure({ errorMsg: error.message }))),
            )),
    ));

    delete$ = createEffect(() => this.action$.pipe(
        ofType(BrandsActions.deleteBrand),
        switchMap(({ update }) =>
            this.bransService.delete_brand(update.changes).pipe(
                map(item =>
                    BrandssApiActions.deleteBrandSuccess()),
                catchError(error => of(
                    BrandssApiActions.deleteBrandFailure({ errorMsg: error.message }))),
            )),
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(BrandsActions.removeBrand),
        switchMap(({ brandId }) => {
            if (brandId <= 0) {
                return empty;
            }
            return this.bransService.remove_brand(brandId).pipe(
                map((item: IBrand) =>
                    BrandssApiActions.removeBrandSuccess({ brandId: item ? item.brandId : 0 })),
                catchError(err => of(
                    BrandssApiActions.removeBrandFailure({ errorMsg: err.message }))),
            );
        }),
    ));
    constructor(
        private action$: Actions,
        private bransService: BrandsService,
    ) { }
}

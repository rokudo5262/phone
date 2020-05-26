import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';
import { IStore } from '../../../@core/data';
import { StoresActions, StoresApiActions } from '../actions';
import { StoresService } from '../services';

@Injectable()
export class StoresEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(StoresActions.loadStores),
        mergeMap(() => this.storeservice.load_stores()
            .pipe(
                map((items: IStore[]) => StoresApiActions
                    .loadStoresSuccess({ stores: items })),
                catchError(err => of(StoresApiActions
                    .loadStoresFailure({ errorMsg: err.message }))),
            )),
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(StoresActions.addStore),
        switchMap(({ store }) =>
            this.storeservice.add_store(store).pipe(
                map((item: IStore) => StoresApiActions
                    .addStoreSuccess({ store: item })),
                catchError(error => of(StoresApiActions
                    .addStoreFailure({ errorMsg: error.message }))),
            )),
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(StoresActions.removeStore),
        switchMap(({ storeId }) => {
            if (storeId <= 0) {
                return empty;
            }
            return this.storeservice.remove_store(storeId).pipe(
                map((item: IStore) => StoresApiActions
                    .removeStoreSuccess({ storeId: item ? item.storeId : 0 })),
                catchError(err => of(StoresApiActions
                    .removeStoreFailure({ errorMsg: err.message }))),
            );
        }),
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(StoresActions.updateStore),
        switchMap(({ update }) =>
            this.storeservice.update_store(update.changes).pipe(
                map(item =>
                    StoresApiActions.updateStoreSuccess()),
                catchError(error => of(
                    StoresApiActions.updateStoreFailure({ errorMsg: error.message }))),
            )),
    ));
    constructor(
        private action$: Actions,
        private storeservice: StoresService,
    ) { }
}

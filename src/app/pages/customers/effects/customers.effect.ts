import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { empty, of } from 'rxjs';
import { CustomersService } from '../services/customers.service';
import { CustomersActions, CustomersApiActions } from '../actions';
import { ICustomer } from '../../../@core/data';

@Injectable()
export class BrandsEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(CustomersActions.loadCustomers),
        mergeMap(() => this.customersService.load_customers()
            .pipe(
                map((items: ICustomer[]) => CustomersApiActions
                    .loadCustomersSuccess({ customers: items })),
                catchError(err => of(CustomersApiActions
                    .loadCustomersFailure({ errorMsg: err.message }))),
            )),
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(CustomersActions.addCustomer),
        switchMap(({ customer }) =>
            this.customersService.add_customer(customer).pipe(
                map((item: ICustomer) => CustomersApiActions
                    .addCustomerSuccess({ customer: item })),
                catchError(error => of(CustomersApiActions
                    .addCustomerFailure({ errorMsg: error.message }))),
            )),
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(CustomersActions.updateCustomer),
        switchMap(({ update }) =>
            this.customersService.update_customer(update.changes).pipe(
                map(item =>
                    CustomersApiActions.updateCustomerSuccess()),
                catchError(error => of(
                    CustomersApiActions.updateCustomerFailure({ errorMsg: error.message }))),
            )),
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(CustomersActions.deleteCustomer),
        switchMap(({ update }) =>
            this.customersService.delete_customer(update.changes).pipe(
                map(item =>
                    CustomersApiActions.deleteCustomerSuccess()),
                catchError(error => of(
                    CustomersApiActions.deleteCustomerFailure({ errorMsg: error.message }))),
            )),
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(CustomersActions.removeCustomer),
        switchMap(({ customerId }) => {
            if (customerId <= 0) {
                return empty;
            }
            return this.customersService.remove_customer(customerId).pipe(
                map((item: ICustomer) =>
                    CustomersApiActions.removeCustomerSuccess({ customerId: item ? item.customerId : 0 })),
                catchError(err => of(
                    CustomersApiActions.removCustomerFailure({ errorMsg: err.message }))),
            );
        }),
    ));
    constructor(
        private action$: Actions,
        private customersService: CustomersService,
    ) { }
}

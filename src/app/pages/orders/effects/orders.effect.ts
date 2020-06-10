import { Injectable } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { OrdersActions, OrdersApiActions } from '../actions';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';
import { IOrder } from '../../../@core/data/orders';

@Injectable()
export class OrdersEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(OrdersActions.loadOrders),
        mergeMap(() => this.orderservice.load_orders()
            .pipe(
                map((items: IOrder[]) => OrdersApiActions
                    .loadOrdersSuccess({ orders: items })),
                catchError(err => of(OrdersApiActions
                    .loadOrdersFailure({ errorMsg: err.message }))),
            )),
    ));
    detail$ = createEffect(() => this.action$.pipe(
        ofType(OrdersActions.getOrderDetail),
        mergeMap(() => this.orderservice.get_order_detail()
            .pipe(
                map((item: IOrder) => OrdersApiActions
                    .getOrderDetailSuccess({ order: item })),
                catchError(err => of(OrdersApiActions
                    .getOrderDetailFailure({ errorMsg: err.message }))),
            )),
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(OrdersActions.addOrder),
        switchMap(({ order }) =>
            this.orderservice.add_order(order).pipe(
                map((item: IOrder) => OrdersApiActions
                    .addOrderSuccess({ order: item })),
                catchError(error => of(OrdersApiActions
                    .addOrderFailure({ errorMsg: error.message }))),
            )),
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(OrdersActions.removeOrder),
        switchMap(({ orderId }) => {
            if (orderId <= 0) {
                return empty;
            }
            return this.orderservice.remove_order(orderId).pipe(
                map((item: IOrder) => OrdersApiActions
                    .removeOrderSuccess({ orderId: item ? item.orderId : 0 })),
                catchError(err => of(OrdersApiActions
                    .removeOrderFailure({ errorMsg: err.message }))),
            );
        }),
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(OrdersActions.updateOrder),
        switchMap(({ update }) =>
            this.orderservice.update_order(update.changes).pipe(
                map(item =>
                    OrdersApiActions.updateOrderSuccess()),
                catchError(error => of(
                    OrdersApiActions.updateOrderFailure({ errorMsg: error.message }))),
            )),
    ));
    constructor(
        private action$: Actions,
        private orderservice: OrdersService,
    ) { }
}

import { createReducer, on } from '@ngrx/store';
import { OrdersActions, OrdersApiActions } from '../actions';
import { orderInitialState, orderAdapter } from '../states';

export const ordersFeatureKey = 'orders';

export const reducer = createReducer(
    orderInitialState,
    on(
        OrdersActions.loadOrders,
        OrdersApiActions.loadOrdersSuccess,
        (state, { orders }) => {
            return orderAdapter.addMany(orders, state);
        },
    ),
    on(
        OrdersActions.getOrderDetail,
        OrdersApiActions.getOrderDetailSuccess,
        (state, { order }) =>  {
            return orderAdapter.addOne(order, state);
        },
    ),
    on(
        OrdersActions.addOrder,
        OrdersApiActions.addOrderSuccess,
        (state, { order }) => orderAdapter.addOne(order, state),
    ),
    on(
        OrdersActions.updateOrder,

        (state, { update }) => orderAdapter.updateOne(update, state),
    ),
    on(
        OrdersActions.deleteOrder,
        (state, { update }) => orderAdapter.updateOne(update, state),
    ),
);

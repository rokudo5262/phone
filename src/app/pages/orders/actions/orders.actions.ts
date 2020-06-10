import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IOrder } from '../../../@core/data/orders';

export const loadOrders = createAction(
  '[Order/API] Load Orders',
  props<{ orders: IOrder[] }>(),
);

export const getOrderDetail = createAction(
  '[Order/API] Get Order Detail',
  props<{ order: IOrder }>(),
);

export const addOrder = createAction(
  '[Order/API] Add Order',
  props<{ order: IOrder }>(),
);

export const updateOrder = createAction(
  '[Order/API] Update Order',
  props<{ update: Update<IOrder> }>(),
);

export const deleteOrder = createAction(
  '[Order/API] Delete Order',
  props<{ update: Update<IOrder> }>(),
);

export const removeOrder = createAction(
  '[Order/API] Remove Order',
  props<{ orderId: number }>(),
);

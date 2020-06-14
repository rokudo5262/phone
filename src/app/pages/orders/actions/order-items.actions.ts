import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IOrder } from '../../../@core/data/orders';

export const loadOrderItems = createAction(
  '[Order Items/API] Load Order Items',
  props<{ orders: IOrder[] }>(),
);

export const getOrderItemDetail = createAction(
  '[Order Item/API] Get Order Item Detail',
  props<{ order: IOrder }>(),
);

export const addOrderItem = createAction(
  '[Order Item/API] Add Order Item',
  props<{ order: IOrder }>(),
);

export const updateOrderItem = createAction(
  '[Order Item/API] Update Order Item',
  props<{ update: Update<IOrder> }>(),
);

export const deleteOrderItem = createAction(
  '[Order Item/API] Delete Order Item',
  props<{ update: Update<IOrder> }>(),
);

export const removeOrderItem = createAction(
  '[Order Item/API] Remove Order Item',
  props<{ orderId: number }>(),
);

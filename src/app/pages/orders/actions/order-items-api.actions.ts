import { createAction, props } from '@ngrx/store';
import { IOrder } from '../../../@core/data/orders';
import { IOrderItem } from '../../../@core/data/orderitems';

/**
 * Load Order Items Api Actions
 */
export const loadOrderItemsSuccess = createAction(
  '[Order Items/API] Load Order Item Success',
  props<{ orderItems: IOrderItem[] }>(),
);
export const loadOrderItemsFailure = createAction(
  '[Order Items/API] Load Orders Item Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Get Order Item Detail Api Actions
 */
export const getOrderItemDetailSuccess = createAction(
  '[Order Item/API] Get Order Item Detail Success',
  props<{ orderItem: IOrder }>(),
);
export const getOrderItemDetailFailure = createAction(
  '[Order Item/API] Get Order Item Detail Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Add Order Item Api Actions
 */
export const addOrderItemSuccess = createAction(
  '[Order Item/API] Add Order Item Success',
  props<{ orderItem: IOrder }>(),
);

export const addOrderItemFailure = createAction(
  '[Order Item/API] Add Order Item Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Update Order Item Api Actions
 */
export const updateOrderItemSuccess = createAction(
  '[Order Item/API] Update Order Item Success',
);
export const updateOrderItemFailure = createAction(
  '[Order Item/API] Update Order Item Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Delete Order Item Api Actions
 */
export const deleteOrderItemSuccess = createAction(
  '[Order Item/API] Delete Order Item Success',
);
export const deleteOrderItemFailure = createAction(
  '[Order Item/API] Delete Order Item Failure',
  props<{ errorMsg: any }>(),
);
/**
 * Remove Order Item Api Actions
 */
export const removeOrderItemSuccess = createAction(
  '[Order Item/API] Remove Order Item Success',
  props<{ orderId: number }>(),
);
export const removeOrderItemFailure = createAction(
  '[Order Item/API] Remove Order Item Failure',
  props<{ errorMsg: any }>(),
);



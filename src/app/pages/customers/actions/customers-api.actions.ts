import { createAction, props } from '@ngrx/store';
import { ICustomer } from '../../../@core/data';

/**
 * Load Customers Api Actions
 */
export const loadCustomersSuccess = createAction(
    '[Customer/API] Load Customers Success',
    props<{ customers: ICustomer[] }>(),
);
export const loadCustomersFailure = createAction(
    '[Customer/API] Load Customers Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Add Customer Api Actions
 */
export const addCustomerSuccess = createAction(
    '[Customer/API] Add Customer Success',
    props<{ customer: ICustomer }>(),
);

export const addCustomerFailure = createAction(
    '[Customer/API] Add Customer Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Customer Api Actions
 */
export const updateCustomerSuccess = createAction(
    '[Customer/API] Update Customer Success',
);
export const updateCustomerFailure = createAction(
    '[Customer/API] Update Customer Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Delete Customer Api Actions
 */
export const deleteCustomerSuccess = createAction(
    '[Customer/API] Delete Customer Success',
);
export const deleteCustomerFailure = createAction(
    '[Customer/API] Delete Customer Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Remove Customer Api Actions
 */
export const removeCustomerSuccess = createAction(
    '[Customer/API] Remove Customer Success',
    props<{ customerId: number }>(),
);
export const removCustomerFailure = createAction(
    '[Customer/API] Remove Customer Failure',
    props<{ errorMsg: any }>(),
);

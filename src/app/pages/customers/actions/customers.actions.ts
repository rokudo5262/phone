import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ICustomer } from '../../../@core/data';

export const loadCustomers = createAction(
    '[Customer/API] Load Customers',
    props<{ customers: ICustomer[] }>(),
);

export const addCustomer = createAction(
    '[Customer/API] Add Customer',
    props<{ customer: ICustomer }>(),
);

export const updateCustomer = createAction(
    '[Customer/API] Update Customer',
    props<{ update: Update<ICustomer> }>(),
);

export const deleteCustomer = createAction(
    '[Customer/API] Delete Customer',
    props<{ update: Update<ICustomer> }>(),
);

export const removeCustomer = createAction(
    '[Customer/API] Remove Customer',
    props<{ customerId: number }>(),
);

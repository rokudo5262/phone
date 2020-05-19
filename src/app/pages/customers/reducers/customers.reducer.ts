import { createReducer, on } from '@ngrx/store';
import { brandAdapter, brandInitialState } from '../states/customers.state';
import { CustomersActions, CustomersApiActions } from '../actions';

export const customersFeatureKey = 'customers';

export const reducer = createReducer(
    brandInitialState,
    on(
        CustomersActions.loadCustomers,
        CustomersApiActions.loadCustomersSuccess,
        (state, { customers }) => {
            customers = customers.filter(x => x.deleted === false);
            return brandAdapter.addMany(customers, state);
        },
    ),
    on(
        CustomersActions.addCustomer,
        CustomersApiActions.addBrandSuccess,
        (state, { customer }) => brandAdapter.addOne(customer, state),
    ),
    on(
        CustomersActions.updateCustomer,
        (state, { update }) => brandAdapter.updateOne(update, state),
    ),
    on(
        CustomersActions.deleteCustomer,
        (state, { update }) => brandAdapter.updateOne(update, state),
    ),
    on(
        CustomersActions.removeCustomer,
        CustomersApiActions.removeCustomerSuccess,
        (state, { customerId }) => brandAdapter.removeOne(customerId, state),
    ),
);

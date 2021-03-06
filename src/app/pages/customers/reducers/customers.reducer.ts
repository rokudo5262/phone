import { createReducer, on } from '@ngrx/store';
import { CustomersActions, CustomersApiActions } from '../actions';
import { customerAdapter, customerInitialState } from '../states';

export const customersFeatureKey = 'customers';

export const reducer = createReducer(
    customerInitialState,
    on(
        CustomersActions.loadCustomers,
        CustomersApiActions.loadCustomersSuccess,
        (state, { customers }) => {
            return customerAdapter.addMany(customers, state);
        },
    ),
    on(
        CustomersActions.getCustomerDetail,
        CustomersApiActions.getCustomerDetailSuccess,
        (state, { customer }) =>  {
            return customerAdapter.addOne(customer, state);
        },
    ),
    on(
        CustomersActions.addCustomer,
        CustomersApiActions.addCustomerSuccess,
        (state, { customer }) => customerAdapter.addOne(customer, state),
    ),
    on(
        CustomersActions.updateCustomer,
        (state, { update }) => customerAdapter.updateOne(update, state),
    ),
    on(
        CustomersActions.deleteCustomer,
        (state, { update }) => customerAdapter.updateOne(update, state),
    ),
    on(
        CustomersActions.removeCustomer,
        CustomersApiActions.removeCustomerSuccess,
        (state, { customerId }) => customerAdapter.removeOne(customerId, state),
    ),
);

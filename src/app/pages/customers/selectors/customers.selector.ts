import { createSelector } from '@ngrx/store';
import { CustomersReducer } from '../reducers';
import { selectCustomersState } from './customers-features.selector';
import { customerAdapter } from '../states/customers.state';

export const selectCustomerEntitiesState = createSelector(
  selectCustomersState,
  state => state[CustomersReducer.customersFeatureKey],
);

export const {
  selectIds: selectCustomerIds,
  selectEntities: selectCustomerEntities,
  selectAll: selectAllCustomers,
  selectTotal: selectTotalCustomers,
} = customerAdapter.getSelectors(selectCustomerEntitiesState);

export const CustomersSelector = {
  selectCustomerEntitiesState,
  selectCustomerIds,
  selectCustomerEntities,
  selectAllCustomers,
  selectTotalCustomers,
};
export const selectCurrentCustomer = (customerId) => createSelector(
  selectCustomerEntities,
  (customer) => customer[customerId],
);

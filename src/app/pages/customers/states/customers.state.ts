import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ICustomer } from '../../../@core/data/customers';

export interface CustomersState extends EntityState<ICustomer> {
    selectedCustomerID: number | string | null;
}
export function sortByCustomerName(customer1: ICustomer, customer2: ICustomer): number {
    return customer1.email.localeCompare(customer2.email);
  }
export const customerAdapter: EntityAdapter<ICustomer> = createEntityAdapter<ICustomer>({
    selectId: (customer: ICustomer) => customer.customerId,
    sortComparer: sortByCustomerName,
});

export const customerInitialState: CustomersState = customerAdapter.getInitialState({
    selectedCustomerID: null,
    entities: {
        0: {},
    },
});

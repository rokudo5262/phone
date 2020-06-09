import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ICustomer } from '../../../@core/data/customers';

export interface CustomersState extends EntityState<ICustomer> {
    selectedCustomerID: number | string | null;
}
export const customerAdapter: EntityAdapter<ICustomer> = createEntityAdapter<ICustomer>({
    selectId: (customer: ICustomer) => customer.customerId,
    sortComparer: null,
});

export const customerInitialState: CustomersState = customerAdapter.getInitialState({
    selectedCustomerID: null,
    entities: {
        0: {},
    },
});

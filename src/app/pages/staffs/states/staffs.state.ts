import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IStaff } from '../../../@core/data';

export interface StaffsState extends EntityState<IStaff> {
    selectedStaffID: number | string | null;
}
export const staffAdapter: EntityAdapter<IStaff> = createEntityAdapter<IStaff>({
    selectId: (staff: IStaff) => staff.staffId,
    sortComparer: null,
});

export const staffInitialState: StaffsState = staffAdapter.getInitialState({
    selectedStaffID: null,
    entities: {
        0: {},
    },
});

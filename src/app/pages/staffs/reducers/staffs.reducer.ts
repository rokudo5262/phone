import { createReducer, on } from '@ngrx/store';
import { StaffsActions, StaffsApiActions } from '../actions';
import { staffAdapter, staffInitialState } from '../states/staffs.state';


export const staffsFeatureKey = 'staffs';

export const reducer = createReducer(
    staffInitialState,
    on(
        StaffsActions.loadStaffs,
        StaffsApiActions.loadStaffsSuccess,
        (state, { staffs }) => {
            staffs = staffs.filter(x => x.deleted === false);
            return staffAdapter.addMany(staffs, state);
        },
    ),
    on(
        StaffsActions.addStaff,
        StaffsApiActions.addStaffSuccess,
        (state, { staff }) => staffAdapter.addOne(staff, state),
    ),
    on(
        StaffsActions.updateStaff,
        (state, { update }) => staffAdapter.updateOne(update, state),
    ),
    on(
        StaffsActions.deleteStaff,
        (state, { update }) => staffAdapter.updateOne(update, state),
    ),
    on(
        StaffsActions.removeStaff,
        StaffsApiActions.removeStaffSuccess,
        (state, { staffid }) => staffAdapter.removeOne(staffid, state),
    ),
);
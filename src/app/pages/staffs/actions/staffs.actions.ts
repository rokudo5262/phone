import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { IStaff } from '../../../@core/data/staffs';

export const loadStaffs = createAction(
    '[Staff/API] Load Staffs',
    props<{ staffs: IStaff[] }>(),
);

export const getStaffDetail = createAction(
    '[Staff/API] Get Staff Detail',
    props<{ staff: IStaff }>(),
);

export const addStaff = createAction(
    '[Staff/API] Add Staff',
    props<{ staff: IStaff }>(),
);

export const updateStaff = createAction(
    '[Staff/API] Update Staff',
    props<{ update: Update<IStaff> }>(),
);

export const deleteStaff = createAction(
    '[Staff/API] Delete Staff',
    props<{ update: Update<IStaff> }>(),
);

export const removeStaff = createAction(
    '[Staff/API] Remove Staff',
    props<{ staffid: number }>(),
);

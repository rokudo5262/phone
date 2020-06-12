import { createAction, props } from '@ngrx/store';
import { IStaff } from '../../../@core/data/staffs';

/**
 * Load Staff Api Actions
 */
export const loadStaffsSuccess = createAction(
    '[Staff/API] Load Staffs Success',
    props<{ staffs: IStaff[] }>(),
);
export const loadStaffsFailure = createAction(
    '[Staff/API] Load Staffs Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Get Staff Detail Api Actions
 */
export const getStaffDetailSuccess = createAction(
    '[Staff/API] Get Staff Detail Success',
    props<{ staff: IStaff }>(),
  );
  export const getStaffDetailFailure = createAction(
    '[Staff/API] Get Staff Detail Failure',
    props<{ errorMsg: any }>(),
  );
/**
 * Add Staff Api Actions
 */
export const addStaffSuccess = createAction(
    '[Staff/API] Add Staff Success',
    props<{ staff: IStaff }>(),
);

export const addStaffFailure = createAction(
    '[Staff/API] Add Staff Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Update Staff Api Actions
 */
export const updateStaffSuccess = createAction(
    '[Staff/API] Update Staff Success',
);
export const updateStaffFailure = createAction(
    '[Staff/API] Update Staff Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Delete Staff Api Actions
 */
export const deleteStaffSuccess = createAction(
    '[Staff/API] Delete Staff Success',
);
export const deleteStaffFailure = createAction(
    '[Staff/API] Delete Staff Failure',
    props<{ errorMsg: any }>(),
);
/**
 * Remove Staff Api Actions
 */
export const removeStaffSuccess = createAction(
    '[Staff/API] Remove Staff Success',
    props<{ staffId: number }>(),
);
export const removeStaffFailure = createAction(
    '[Staff/API] Remove Staff Failure',
    props<{ errorMsg: any }>(),
);

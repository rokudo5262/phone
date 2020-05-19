import { createSelector } from '@ngrx/store';
import { selectStaffsState } from './staffs-features.selector';
import { StaffsReducer } from '../reducers';
import { staffAdapter } from '../states/staffs.state';

export const selectStaffEntitiesState = createSelector(
  selectStaffsState,
  state => state[StaffsReducer.staffsFeatureKey],
);

export const {
  selectIds: selectStaffIds,
  selectEntities: selectStaffEntities,
  selectAll: selectAllStaffs,
  selectTotal: selectTotalStaffs,
} = staffAdapter.getSelectors(selectStaffEntitiesState);

export const StaffSelectors = {
  selectStaffEntitiesState,
  selectStaffIds,
  selectStaffEntities,
  selectAllStaffs,
  selectTotalStaffs,
};
export const selectCurrentStaff = (staffid) => createSelector(
  selectStaffEntities,
  (staff) => staff[staffid],
);

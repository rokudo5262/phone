import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { IStaff } from '../../../@core/data';
import { empty, of } from 'rxjs';
import { StaffsActions, StaffsApiActions } from '../actions';
import { StaffsService } from '../services';

@Injectable()
export class StaffsEffect {
    load$ = createEffect(() => this.action$.pipe(
        ofType(StaffsActions.loadStaffs),
        mergeMap(() => this.staffsService.load_staffs()
            .pipe(
                map((items: IStaff[]) => StaffsApiActions
                    .loadStaffsSuccess({ staffs: items })),
                catchError(err => of(StaffsApiActions
                    .loadStaffsFailure({ errorMsg: err.message }))),
            )),
    ));
    add$ = createEffect(() => this.action$.pipe(
        ofType(StaffsActions.addStaff),
        switchMap(({ staff }) =>
            this.staffsService.add_staff(staff).pipe(
                map((item: IStaff) => StaffsApiActions
                    .addStaffSuccess({ staff: item })),
                catchError(error => of(StaffsApiActions
                    .addStaffFailure({ errorMsg: error.message }))),
            )),
    ));
    update$ = createEffect(() => this.action$.pipe(
        ofType(StaffsActions.updateStaff),
        switchMap(({ update }) =>
            this.staffsService.update_staff(update.changes).pipe(
                map(item =>
                    StaffsApiActions.updateStaffSuccess()),
                catchError(error => of(
                    StaffsApiActions.updateStaffFailure({ errorMsg: error.message }))),
            )),
    ));
    delete$ = createEffect(() => this.action$.pipe(
        ofType(StaffsActions.deleteStaff),
        switchMap(({ update }) =>
            this.staffsService.delete_staff(update.changes).pipe(
                map(item => StaffsApiActions
                    .deleteStaffSuccess()),
                catchError(error => of(StaffsApiActions
                    .deleteStaffFailure({ errorMsg: error.message }))),
            )),
    ));
    remove$ = createEffect(() => this.action$.pipe(
        ofType(StaffsActions.removeStaff),
        switchMap(({ staffid }) => {
            if (staffid <= 0) {
                return empty;
            }
            return this.staffsService.remove_staff(staffid).pipe(
                map((item: IStaff) =>
                    StaffsApiActions.removeStaffSuccess({ staffid: item ? item.staffId : 0 })),
                catchError(err => of(
                    StaffsApiActions.removeStaffFailure({ errorMsg: err.message }))),
            );
        }),
    ));
    constructor(
        private action$: Actions,
        private staffsService: StaffsService,
    ) { }
}

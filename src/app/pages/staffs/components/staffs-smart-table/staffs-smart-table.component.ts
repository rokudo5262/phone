import { Component, OnInit } from '@angular/core';
import { IStaff } from '../../../../@core/data';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { StaffSelectors } from '../../selectors/staffs.selector';
import { StaffsActions } from '../../actions';

@Component({
  selector: 'ngx-staffs-smart-table',
  styleUrls: ['./staffs-smart-table.component.scss'],
  templateUrl: './staffs-smart-table.component.html',
})
export class StaffsSmartTableComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    // selectMode: 'multi',
    edit: {
      editButtonContent: '<i class="nb-compose"></i>',
      // editButtonContent: '<i class="nb-edit"></i>',
      // saveButtonContent: '<i class="nb-checkmark"></i>',
      // cancelButtonContent: '<i class="nb-close"></i>',,
    },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    pager: {
      display: true,
      perPage: 20,
    },
    columns: {
      staffId: {
        title: 'Staffs Id',
        filter: true,
        type: 'number',
        editable: false,
      },
    },
    actions: {
      add: false,
      delete: false,
      edit: false,
    },
  };
  staffs$: Observable<IStaff[]>;
  dialogRef: any;
  constructor(
    private store: Store<IStaff>,
  ) {
    this.staffs$ = this.store.pipe(select(StaffSelectors.selectAllStaffs));
    this.staffs$.subscribe(g => console.log(g.length));
  }
  ngOnInit () {
    this.store.dispatch(StaffsActions.loadStaffs({ staffs: [] }));
  }
  close() {
    this.dialogRef.close();
  }
}
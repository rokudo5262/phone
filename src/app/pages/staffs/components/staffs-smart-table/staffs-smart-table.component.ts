import { Component, OnInit } from '@angular/core';
import { IStaff } from '../../../../@core/data';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { StaffSelectors } from '../../selectors/staffs.selector';
import { StaffsActions } from '../../actions';
import { Router } from '@angular/router';

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
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: true,
      perPage: 20,
    },
    columns: {
      staffId: {
        title: 'Staff Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      email: {
        title: 'Email',
        filter: true,
        type: 'string',
        editable: true,
      },
      status: {
        title: 'Status',
        filter: true,
        type: 'string',
        editable: true,
      },
    },
    actions: {
      add: false,
      delete: true,
      edit: false,
    },
  };
  staffs$: Observable<IStaff[]>;
  dialogRef: any;
  constructor(
    private route: Router,
    private store: Store<IStaff>,
  ) {
    this.staffs$ = this.store.pipe(select(StaffSelectors.selectAllStaffs));
    this.staffs$.subscribe(g => console.log(g.length));
  }
  ngOnInit () {
    this.store.dispatch(StaffsActions.loadStaffs({ staffs: [] }));
  }
  navigateToStaffDetail(event) {
    this.route.navigate(['pages/staffs/staff/', event.data.staffId]);
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete Staff:' + event.data.staffId + '?')) {
      this.store.dispatch(StaffsActions.removeStaff({ staffId: event.data.staffId }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

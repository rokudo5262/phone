import { Component, OnInit } from '@angular/core';
import { IBrand, ICustomer } from '../../../../@core/data';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { CustomersSelector } from '../../selectors/customers.selector';
import { CustomersActions } from '../../actions';
import { CustomersAddComponent } from '../customers-add/customers-add.component';

@Component({
  selector: 'ngx-customers-smart-table',
  styleUrls: ['./customers-smart-table.component.scss'],
  templateUrl: './customers-smart-table.component.html',
})
export class CustomersSmartTableComponent implements OnInit {
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
      brandId: {
        title: 'Brand Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      brandName: {
        title: 'Brand Id',
        type: 'string',
        editable: true,
      },
      remark: {
        title: 'Remark',
        type: 'string',
        editable: true,
      },
      status: {
        title: 'Status',
        type: 'string',
        editable: false,
      },
    },
    actions: {
      add: false,
      delete: false,
      edit: false,
    },
  };
  customers$: Observable<ICustomer[]>;
  dialogRef: any;
  constructor(
    private store: Store<IBrand>,
    private route: Router,
    private dialogService: NbDialogService,
  ) {
    this.customers$ = this.store.pipe(select(CustomersSelector.selectAllCustomers));
    this.customers$.subscribe(g => console.log(g.length));
  }
  ngOnInit () {
    this.store.dispatch(CustomersActions.loadCustomers({ customers: [] }));
  }
  navigateToBrandDetail(event) {
    this.route.navigate(['pages/brands/brand/', event.data.id]);
  }
  add() {
    this.dialogService.open(CustomersAddComponent);
  }
  back() {
    this.route.navigate(['pages/brands/library']);
  }
  close() {
    this.dialogRef.close();
  }
}

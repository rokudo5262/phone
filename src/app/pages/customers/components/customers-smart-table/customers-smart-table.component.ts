import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { CustomersActions } from '../../actions';
import { ICustomer } from '../../../../@core/data/customers';
import { CustomersSelector } from '../../selectors';

@Component({
  selector: 'ngx-customers-smart-table',
  styleUrls: ['./customers-smart-table.component.scss'],
  templateUrl: './customers-smart-table.component.html',
})
export class CustomersSmartTableComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    // selectMode: 'multi',
    mode: 'inline',
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: true,
      perPage: 20,
    },
    columns: {
      customerId: {
        title: 'Customer Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      customerName: {
        title: 'Customer Name',
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
      delete: true,
      edit: false,
    },
  };
  customers$: Observable<ICustomer[]>;
  dialogRef: any;
  constructor(
    private store: Store<ICustomer>,
    private route: Router,
  ) {
    this.customers$ = this.store.pipe(select(CustomersSelector.selectAllCustomers));
    this.customers$.subscribe(g => console.log(g.length));
  }
  ngOnInit () {
    this.store.dispatch(CustomersActions.loadCustomers({ customers: [] }));
  }
  navigateToCustomerDetail(event) {
    this.route.navigate(['pages/customers/customer/', event.data.customerId]);
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete Customer:' + event.data.customerId + '?')) {
      this.store.dispatch(CustomersActions.removeCustomer({ customerId: event.data.customerId }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

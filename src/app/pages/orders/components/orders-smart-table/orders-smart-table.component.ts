import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IOrder } from '../../../../@core/data/orders';
import { OrdersSelector } from '../../selectors/orders.selector';
import { OrdersActions } from '../../actions';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-orders-smart-table',
  templateUrl: './orders-smart-table.component.html',
  styleUrls: ['./orders-smart-table.component.scss'],

})
export class OrdersSmartTableComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    // selectMode: 'multi',
    // edit: {
    //   editButtonContent: '<i class="nb-compose"></i>',
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',,
    // },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: true,
      perPage: 20,
    },
    columns: {
      orderId: {
        title: 'Order Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      customerId: {
        title: 'Customer Id',
        type: 'number',
        editable: false,
      },
      staffId: {
        title: 'Staff Id',
        type: 'number',
        editable: false,
      },
      status: {
        title: 'Status',
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
  orders$: Observable<IOrder[]>;
  dialogRef: any;
  constructor(
    private route: Router,
    private store: Store<IOrder>,
  ) {
    this.orders$ = this.store.pipe(select(OrdersSelector.selectAllOrders));
    this.orders$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.store.dispatch(OrdersActions.loadOrders({ orders: [] }));
  }
  navigateToOrderDetail(event) {
    this.route.navigate(['pages/orders/order/', event.data.orderId]);
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete Order:' + event.data.orderId + '?')) {
      this.store.dispatch(OrdersActions.removeOrder({ orderId: event.data.orderId }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../../../../@core/data';
import { Store, select } from '@ngrx/store';
import { OrdersSelector } from '../../selectors';
import { OrdersActions } from '../../actions';


@Component({
  selector: 'ngx-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss'],
})
export class OrdersDetailComponent implements OnInit {
  order$;
  orderId$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<IOrder>,
  ) {
    this.orderId$ = +this.router.snapshot.params.orderId;
    this.order$ = this.store.pipe(select(OrdersSelector.selectCurrentOrder(this.orderId$)));
    this.order$.subscribe(g => console.log(this.orderId$));
  }
  ngOnInit() {
    this.store.dispatch(OrdersActions.loadOrders({ orders: [] }));
  }
}

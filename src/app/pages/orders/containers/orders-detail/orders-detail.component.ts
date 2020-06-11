import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IOrder } from '../../../../@core/data';
import { Store, select } from '@ngrx/store';
import { OrdersSelector } from '../../selectors';
import { OrdersActions } from '../../actions';
import { NbDialogService } from '@nebular/theme';
import { OrdersUpdateComponent } from '../../components/orders-update/orders-update.component';

@Component({
  selector: 'ngx-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss'],
})
export class OrdersDetailComponent implements OnInit {
  order$;
  orderId$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<IOrder>,
    private dialogService: NbDialogService,
  ) {
    this.orderId$ = +this.router.snapshot.params.orderId;
    this.order$ = this.store.pipe(select(OrdersSelector.selectCurrentOrder(this.orderId$)));
    this.order$.subscribe(g => console.log(this.orderId$));
  }
  ngOnInit() {
    this.store.dispatch(OrdersActions.loadOrders({ orders: [] }));
  }
  update() {
    this.dialogService.open(OrdersUpdateComponent);
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/orders/library']);
  }
}

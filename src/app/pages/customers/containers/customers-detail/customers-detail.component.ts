import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { CustomersSelector } from '../../selectors';
import { ICustomer } from '../../../../@core/data/customers';
import { CustomersActions } from '../../actions';

@Component({
  selector: 'ngx-customers-detail',
  styleUrls: ['./customers-detail.component.scss'],
  templateUrl: './customers-detail.component.html',
})
export class CustomersDetailComponent implements OnInit {
  customer$;
  customerId$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<ICustomer>,
  ) {
    this.customerId$ = +this.router.snapshot.params.customerId;
    this.customer$ = this.store.pipe(select(CustomersSelector.selectCurrentCustomer(this.customerId$)));
  }
  ngOnInit() {
    this.store.dispatch(CustomersActions.loadCustomers({ customers: [] }));
  }
  update() {
  }
  delete() {
  }
  back() {
  }
}

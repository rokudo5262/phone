import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersSelector } from '../../selectors';
import { ICustomer } from '../../../../@core/data/customers';
import { CustomersActions } from '../../actions';
import { NbDialogService } from '@nebular/theme';
import { CustomersUpdateComponent } from '../../components/customers-update/customers-update.component';

@Component({
  selector: 'ngx-customers-detail',
  styleUrls: ['./customers-detail.component.scss'],
  templateUrl: './customers-detail.component.html',
})
export class CustomersDetailComponent implements OnInit {
  @Input() customer: ICustomer;
  customer$;
  customerId$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<ICustomer>,
    private dialogService: NbDialogService,
  ) {
    this.customerId$ = +this.router.snapshot.params.customerId;
    this.customer$ = this.store.pipe(select(CustomersSelector.selectCurrentCustomer(this.customerId$)));
    this.customer$.subscribe(g => console.log(this.customerId$));
  }
  ngOnInit() {
    this.store.dispatch(CustomersActions.loadCustomers({ customers: [] }));
  }
  update() {
    this.dialogService.open(CustomersUpdateComponent);
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/customers/library']);
  }
}

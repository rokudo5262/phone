import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IBrand } from '../../../../@core/data/brands';
import { ActivatedRoute } from '@angular/router';
import { StaffsSelector } from '../../selectors';
import { StaffsActions } from '../../actions';

@Component({
  selector: 'ngx-staffs-detail',
  styleUrls: ['./staffs-detail.component.scss'],
  templateUrl: './staffs-detail.component.html',
})
export class StaffsDetailComponent implements OnInit {
  staff$;
  staffId$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<IBrand>,
  ) {
    this.staffId$ = +this.router.snapshot.params.staffId;
    this.staff$ = this.store.pipe(select(StaffsSelector.selectCurrentStaff(this.staffId$)));
  }
  ngOnInit() {
    this.store.dispatch(StaffsActions.loadStaffs({ staffs: [] }));
  }
  update() {
  }
  delete() {
  }
  back() {
  }
}

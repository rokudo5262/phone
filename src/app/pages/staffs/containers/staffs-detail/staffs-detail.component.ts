import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { StaffsSelector } from '../../selectors';
import { StaffsActions } from '../../actions';
import { IStaff } from '../../../../@core/data/staffs';

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
    private store: Store<IStaff>,
  ) {
    this.staffId$ = +this.router.snapshot.params.staffId;
    this.staff$ = this.store.pipe(select(StaffsSelector.selectCurrentStaff(this.staffId$)));
    this.staff$.subscribe(g => console.log(this.staffId$));
  }
  ngOnInit() {
    this.store.dispatch(StaffsActions.loadStaffs({ staffs: [] }));
  }
}

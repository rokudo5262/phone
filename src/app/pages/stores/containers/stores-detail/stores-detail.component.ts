import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IStore } from '../../../../@core/data/stores';
import { StoresActions } from '../../actions';
import { StoresSelector } from '../../selectors';

@Component({
  selector: 'ngx-stores-detail',
  templateUrl: './stores-detail.component.html',
  styleUrls: ['./stores-detail.component.scss'],
})
export class StoresDetailComponent implements OnInit {
  store$;
  storeId$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<IStore>,
  ) {
    this.storeId$ = +this.router.snapshot.params.storeId;
    this.store$ = this.store.pipe(select(StoresSelector.selectCurrentStore(this.storeId$)));
  }
  ngOnInit() {
    this.store.dispatch(StoresActions.loadStores({ stores: [] }));
  }
  update() {
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/stores/library']);
  }
}

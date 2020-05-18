import { Component, OnInit } from '@angular/core';
import { BrandsActions } from '../../actions';
import { BrandsSelector } from '../../selectors';
import { select, Store } from '@ngrx/store';
import { IBrand } from '../../../../@core/data/brands';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-brands-detail',
  styleUrls: ['./brands-detail.component.scss'],
  templateUrl: './brands-detail.component.html',
})
export class BrandsDetailComponent implements OnInit {
  brand$;
  brand_id$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<IBrand>,
  ) {
    this.brand_id$ = +this.router.snapshot.params.brand_id;
    this.brand$ = this.store.pipe(select(BrandsSelector.selectCurrentBrand(this.brand_id$)));
  }
  ngOnInit() {
    this.store.dispatch(BrandsActions.loadBrands({ brands: [] }));
  }
  update() {
  }
  delete() {
  }
  back() {
  }
}

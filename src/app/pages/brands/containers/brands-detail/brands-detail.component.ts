import { Component, OnInit, Input } from '@angular/core';
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
  @Input() brand: IBrand;
  brand$;
  brandId$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<IBrand>,
  ) {
    this.brandId$ = +this.router.snapshot.params.brandId;
    this.brand$ = this.store.pipe(select(BrandsSelector.selectCurrentBrand(this.brandId$)));
    this.brand$.subscribe(g => console.log(this.brandId$));
  }
  ngOnInit() {
    this.store.dispatch(BrandsActions.loadBrands({ brands: [] }));
  }
}

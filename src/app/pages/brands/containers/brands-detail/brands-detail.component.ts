import { Component, OnInit } from '@angular/core';
import { BrandsActions } from '../../actions';
import { BrandsSelector } from '../../selectors';
import { select, Store } from '@ngrx/store';
import { IBrand } from '../../../../@core/data/brands';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-brands-detail',
  styleUrls: ['./brands-detail.component.scss'],
  templateUrl: './brands-detail.component.html',
})
export class BrandsDetailComponent implements OnInit {
  brand$;
  brandId$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<IBrand>,
  ) {
    this.brandId$ = +this.router.snapshot.params.brandId;
    this.brand$ = this.store.pipe(select(BrandsSelector.selectCurrentBrand(this.brandId$)));
  }
  ngOnInit() {
    this.store.dispatch(BrandsActions.loadBrands({ brands: [] }));
  }
  update() {
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/brands/library']);
  }
}

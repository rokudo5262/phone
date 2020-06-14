import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../../@core/data/products';
import { Store, select } from '@ngrx/store';
import { ProductsSelector } from '../../selectors';
import { ProductsActions } from '../../actions';

@Component({
  selector: 'ngx-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})
export class ProductsDetailComponent implements OnInit {
  product$;
  productId$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<IProduct>,
  ) {
    this.productId$ = +this.router.snapshot.params.productId;
    this.product$ = this.store.pipe(select(ProductsSelector.selectCurrentProduct(this.productId$)));
    this.product$.subscribe(g => console.log(this.productId$));
  }
  ngOnInit() {
    this.store.dispatch(ProductsActions.loadProducts({ products: [] }));
  }
}

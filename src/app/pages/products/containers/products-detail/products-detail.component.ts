import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<IProduct>,
  ) {
    this.productId$ = +this.router.snapshot.params.productId;
    this.product$ = this.store.pipe(select(ProductsSelector.selectCurrentProduct(this.productId$)));
   }
  ngOnInit() {
    this.store.dispatch(ProductsActions.loadProducts({ products: [] }));
  }
  update() {
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/products/library']);
  }
}

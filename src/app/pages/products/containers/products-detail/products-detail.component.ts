import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from '../../../../@core/data/products';
import { Store, select } from '@ngrx/store';
import { ProductsSelector } from '../../selectors';
import { ProductsActions } from '../../actions';
import { IStaff } from '../../../../@core/data';
import { NbDialogService } from '@nebular/theme';
import { ProductsUpdateComponent } from '../../components/products-update/products-update.component';

@Component({
  selector: 'ngx-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})
export class ProductsDetailComponent implements OnInit {
  @Input() staff: IStaff;
  product$;
  productId$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<IProduct>,
    private dialogService: NbDialogService,
  ) {
    this.productId$ = +this.router.snapshot.params.productId;
    this.product$ = this.store.pipe(select(ProductsSelector.selectCurrentProduct(this.productId$)));
    this.product$.subscribe(g => console.log(this.productId$));
  }
  ngOnInit() {
    this.store.dispatch(ProductsActions.loadProducts({ products: [] }));
  }
  update() {
    this.dialogService.open(ProductsUpdateComponent);
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/products/library']);
  }
}

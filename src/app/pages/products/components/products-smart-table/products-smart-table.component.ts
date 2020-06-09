import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { IOrder } from '../../../../@core/data/orders';
import { ProductsSelector } from '../../selectors/products.selector';
import { ProductsActions } from '../../actions';
import { ProductsAddComponent } from '../products-add/products-add.component';
import { IProduct } from '../../../../@core/data/products';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-products-smart-table',
  templateUrl: './products-smart-table.component.html',
  styleUrls: ['./products-smart-table.component.scss'],

})
export class ProductsSmartTableComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    // selectMode: 'multi',
    // edit: {
    //   editButtonContent: '<i class="nb-compose"></i>',
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',,
    // },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: true,
      perPage: 20,
    },
    columns: {
      productId: {
        title: 'Product Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      productName: {
        title: 'Product Name',
        type: 'string',
        editable: true,
      },
      status: {
        title: 'Status',
        type: 'string',
        editable: true,
      },
    },
    actions: {
      add: false,
      delete: true,
      edit: false,
    },
  };
  products$: Observable<IProduct[]>;
  dialogRef: any;
  constructor(
    private route: Router,
    private store: Store<IOrder>,
    private dialogService: NbDialogService,
  ) {
    this.products$ = this.store.pipe(select(ProductsSelector.selectAllProducts));
    this.products$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.store.dispatch(ProductsActions.loadProducts({ products: [] }));
  }
  open() {
    this.dialogService.open(ProductsAddComponent);
  }
  navigateToProductDetail(event) {
    this.route.navigate(['pages/products/product/', event.data.productId]);
  }
}

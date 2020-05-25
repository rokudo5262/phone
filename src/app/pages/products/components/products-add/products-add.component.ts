import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { IProduct } from '../../../../@core/data';
import { ProductsActions } from '../../actions';

@Component({
  selector: 'ngx-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss'],
})
export class ProductsAddComponent implements OnInit {
  public order: IProduct;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private store: Store<IProduct>,
    private dialogRef: NbDialogRef<ProductsAddComponent>,
  ) { }

  ngOnInit() {
  }
  submit(item) {
    this.store.dispatch(ProductsActions.addProduct({ product: item }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.scss'],
})
export class ProductsUpdateComponent implements OnInit {
  public updateProductForm: FormGroup;
  constructor(
    private dialogRef: NbDialogRef<ProductsUpdateComponent>,
  ) { }
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}

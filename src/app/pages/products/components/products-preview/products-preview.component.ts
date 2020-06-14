import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../@core/data/products';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { ProductsUpdateComponent } from '../products-update/products-update.component';

@Component({
  selector: 'ngx-products-preview',
  templateUrl: './products-preview.component.html',
  styleUrls: ['./products-preview.component.scss'],
})

export class ProductPreviewComponent implements OnInit {
  @Input() product: IProduct;
  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
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

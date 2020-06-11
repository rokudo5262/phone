import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../@core/data/products';

@Component({
  selector: 'ngx-products-preview',
  templateUrl: './products-preview.component.html',
  styleUrls: ['./products-preview.component.scss'],
})

export class ProductPreviewComponent implements OnInit {
  @Input() product: IProduct;
  constructor(
  ) { }
  ngOnInit() {
  }
}

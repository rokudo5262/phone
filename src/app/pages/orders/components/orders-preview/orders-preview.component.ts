import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from '../../../../@core/data/orders';

@Component({
  selector: 'ngx-orders-preview',
  templateUrl: './orders-preview.component.html',
  styleUrls: ['./orders-preview.component.scss'],
})

export class OrdersPreviewComponent implements OnInit {
  @Input() order: IOrder;
  constructor(
  ) { }
  ngOnInit() {
  }
}

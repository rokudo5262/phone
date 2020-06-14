import { Component, Input, OnInit } from '@angular/core';
import { IOrder } from '../../../../@core/data/orders';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { OrdersUpdateComponent } from '../orders-update/orders-update.component';

@Component({
  selector: 'ngx-orders-preview',
  templateUrl: './orders-preview.component.html',
  styleUrls: ['./orders-preview.component.scss'],
})

export class OrdersPreviewComponent implements OnInit {
  @Input() order: IOrder;
  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
  }
  update() {
    this.dialogService.open(OrdersUpdateComponent);
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/orders/library']);
  }
}

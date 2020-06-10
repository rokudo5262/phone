import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-orders-update',
  templateUrl: './orders-update.component.html',
  styleUrls: ['./orders-update.component.scss'],
})
export class OrdersUpdateComponent implements OnInit {
  public updateOrderForm: FormGroup;
  constructor(
    private dialogRef: NbDialogRef<OrdersUpdateComponent>,
  ) { }
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}

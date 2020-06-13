import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { IOrder } from '../../../../@core/data/orders';
import { OrdersActions } from '../../actions';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrls: ['./orders-add.component.scss'],
})
export class OrdersAddComponent implements OnInit {
  public addOrderForm: FormGroup;
  public order: IOrder;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<IOrder>,
    private dialogRef: NbDialogRef<OrdersAddComponent>,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addOrderForm = this.fb.group({
      brandId: [0, Validators.required],
      brandName: ['', Validators.required],
      remark: ['', Validators.required],
      status: ['On', Validators.required],
      createdBy: ['1', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      deleted: [false, Validators.required],
    });
  }
  submit(item) {
    this.store.dispatch(OrdersActions.addOrder({ order: item }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }

}

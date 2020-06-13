import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { IOrder } from '../../../../@core/data/orders';
import { StoresActions } from '../../actions';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IStore } from '../../../../@core/data/stores';

@Component({
  selector: 'ngx-stores-add',
  templateUrl: './stores-add.component.html',
  styleUrls: ['./stores-add.component.scss'],
})
export class StoresAddComponent implements OnInit {
  public addStoreForm: FormGroup;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private storess: Store<IStore>,
    private dialogRef: NbDialogRef<StoresAddComponent>,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addStoreForm = this.fb.group({
      storeId: [0, Validators.required],
      remark: ['', Validators.required],
      status: ['On', Validators.required],
      createdBy: ['1', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      deleted: [false, Validators.required],
    });
  }
  submit(item) {
    this.storess.dispatch(StoresActions.addStore({ store: item }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}

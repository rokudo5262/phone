import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IBrand } from '../../../../@core/data';
import { Store } from '@ngrx/store';
import { BrandsActions } from '../../actions';

@Component({
  selector: 'ngx-brands-add',
  styleUrls: ['./brands-add.component.scss'],
  templateUrl: './brands-add.component.html',
})
export class BrandsAddComponent implements OnInit {
  public addBrandForm: FormGroup;
  public category: IBrand;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<IBrand>,
    private dialogRef: NbDialogRef<BrandsAddComponent>,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addBrandForm = this.fb.group({
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
    this.store.dispatch(BrandsActions.addBrand({ brand: item }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}

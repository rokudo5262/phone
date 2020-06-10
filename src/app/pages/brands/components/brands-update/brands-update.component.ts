import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IBrand } from '../../../../@core/data/brands';

@Component({
  selector: 'ngx-brands-update',
  styleUrls: ['./brands-update.component.scss'],
  templateUrl: './brands-update.component.html',
})
export class BrandsUpdateComponent implements OnInit {
  public updateBrandorm: FormGroup;
  public brand: IBrand;
  constructor(
    private fb: FormBuilder,
    private dialogRef: NbDialogRef<BrandsUpdateComponent>,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.updateBrandorm = this.fb.group({
      brandId: [this.brand ? this.brand.brandId : '', Validators.required],
      brandName: [this.brand ? this.brand.brandName : '', Validators.required],
      remark: [this.brand ? this.brand.remark : '', Validators.required],
      status: [this.brand ? this.brand.status : '', Validators.required],
      createdBy: [this.brand ? this.brand.createdBy : '', Validators.required],
      lastUpdatedBy: [this.brand ? this.brand.lastUpdatedBy : '', Validators.required],
      createdDateTime: [this.brand ? this.brand.createdDateTime : '', Validators.required],
      lastUpdatedDateTime: [this.brand ? this.brand.lastUpdatedDateTime : '', Validators.required],
      deleted: [this.brand ? this.brand.deleted : '', Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
}

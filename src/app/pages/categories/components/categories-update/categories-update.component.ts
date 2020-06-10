import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { ICategory } from '../../../../@core/data';

@Component({
  selector: 'ngx-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss'],
})
export class CategoriesUpdateComponent implements OnInit {
  public updateCategoryForm: FormGroup;
  public category: ICategory;
  constructor(
    private fb: FormBuilder,
    private dialogRef: NbDialogRef<CategoriesUpdateComponent>,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.updateCategoryForm = this.fb.group({
      categoryId: [this.category ? this.category.categoryId : '', Validators.required],
      categoryName: [this.category ? this.category.categoryName : '', Validators.required],
      remark: [this.category ? this.category.remark : '', Validators.required],
      status: [this.category ? this.category.status : '', Validators.required],
      createdBy: [this.category ? this.category.createdBy : '', Validators.required],
      lastUpdatedBy: [this.category ? this.category.lastUpdatedBy : '', Validators.required],
      createdDateTime: [this.category ? this.category.createdDateTime : '', Validators.required],
      lastUpdatedDateTime: [this.category ? this.category.lastUpdatedDateTime : '', Validators.required],
      deleted: [this.category ? this.category.deleted : '', Validators.required],
    });
  }
  close() {
    this.dialogRef.close();
  }
}

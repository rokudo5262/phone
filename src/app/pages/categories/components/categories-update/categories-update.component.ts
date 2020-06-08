import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-categories-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.scss'],
})
export class CategoriesUpdateComponent implements OnInit {
  public updateCategoryForm: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.updateCategoryForm = this.fb.group({
      categoryId: [0, Validators.required],
      categoryName: ['', Validators.required],
      remark: ['', Validators.required],
      status: ['On', Validators.required],
      createdBy: ['1', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      deleted: [false, Validators.required],
    });
  }
}

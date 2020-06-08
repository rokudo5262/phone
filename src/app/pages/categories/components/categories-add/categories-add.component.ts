import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { CategoriesActions } from '../../actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICategory } from '../../../../@core/data';

@Component({
  selector: 'ngx-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.scss'],
})
export class CategoriesAddComponent implements OnInit {
  public addCategoryForm: FormGroup;
  public category: ICategory;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<ICategory>,
    private dialogRef: NbDialogRef<CategoriesAddComponent>,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addCategoryForm = this.fb.group({
      categoryId: [0, Validators.required],
      categoryName: ['', Validators.required],
      remark: ['', Validators.required],
      status: ['On', Validators.required],
      createdBy: ['1', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      deleted: [false, Validators.required],
    });
  }
  submit(item) {
    this.store.dispatch(CategoriesActions.addCategory({ category: item }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}

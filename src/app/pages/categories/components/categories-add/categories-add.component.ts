import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { IProduct } from '../../../../@core/data';
import { CategoriesActions } from '../../actions';

@Component({
  selector: 'ngx-categories-add',
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.scss'],
})
export class CategoriesAddComponent implements OnInit {
  public order: IProduct;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private store: Store<IProduct>,
    private dialogRef: NbDialogRef<CategoriesAddComponent>,
  ) { }

  ngOnInit() {
  }
  submit(item) {
    this.store.dispatch(CategoriesActions.addCategory({ category: item }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}

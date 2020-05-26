import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { NbDialogRef } from '@nebular/theme';
import { IOrder } from '../../../../@core/data/orders';
import { StoresActions } from '../../actions';

@Component({
  selector: 'ngx-stores-add',
  templateUrl: './stores-add.component.html',
  styleUrls: ['./stores-add.component.scss'],
})
export class StoresAddComponent implements OnInit {
  public order: IOrder;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private store: Store<IOrder>,
    private dialogRef: NbDialogRef<StoresAddComponent>,
  ) { }

  ngOnInit() {
  }
  submit(item) {
    this.store.dispatch(StoresActions.addStore({ store: item }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}

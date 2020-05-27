import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { IStore } from '../../../../@core/data/stores';
import { StoresSelector } from '../../selectors/stores.selector';
import { StoresActions } from '../../actions';
import { StoresAddComponent } from '../stores-add/stores-add.component';

@Component({
  selector: 'ngx-stores-smart-table',
  templateUrl: './stores-smart-table.component.html',
  styleUrls: ['./stores-smart-table.component.scss'],

})
export class StoresSmartTableComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    // selectMode: 'multi',
    // edit: {
    //   editButtonContent: '<i class="nb-compose"></i>',
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',,
    // },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: true,
      perPage: 20,
    },
    columns: {
      storeId: {
        title: 'Store Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      storeName: {
        title: 'Store Name',
        type: 'string',
        editable: true,
      },
      status: {
        title: 'Status',
        type: 'string',
        editable: true,
      },
    },
    actions: {
      add: false,
      delete: true,
      edit: false,
    },
  };
  stores$: Observable<IStore[]>;
  dialogRef: any;
  constructor(
    private store: Store<IStore>,
    private dialogService: NbDialogService,
  ) {
    this.stores$ = this.store.pipe(select(StoresSelector.selectAllStores));
    this.stores$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.onRefresh();
  }
  onRefresh() {
    this.store.dispatch(StoresActions.loadStores({ stores: [] }));
}
  open() {
    this.dialogService.open(StoresAddComponent);
  }
}

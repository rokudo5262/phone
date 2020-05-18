import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { ICategory } from '../../../../@core/data';
import { CategoriesSelector } from '../../selectors/categories.selector';
import { CategoriesActions } from '../../actions';

@Component({
  selector: 'ngx-categories-smart-table',
  templateUrl: './categories-smart-table.component.html',
  styleUrls: ['./categories-smart-table.component.scss'],

})
export class CategoriesSmartTableComponent implements OnInit {
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
      category_id: {
        title: 'Category Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      category_name: {
        title: 'Category Name',
        type: 'string',
        editable: true,
      },
    },
    actions: {
      add: false,
      delete: false,
      edit: false,
    }
  };
  categories$: Observable<ICategory[]>;
  dialogRef: any;
  constructor(
    private store: Store<ICategory>,
  ) {
    this.categories$ = this.store.pipe(select(CategoriesSelector.selectAllCategories));
    this.categories$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.store.dispatch(CategoriesActions.loadCategories({ categories: [] }));
  }
}

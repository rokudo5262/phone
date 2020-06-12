import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICategory } from '../../../../@core/data';
import { CategoriesSelector } from '../../selectors/categories.selector';
import { CategoriesActions } from '../../actions';
import { Router } from '@angular/router';

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
      categoryId: {
        title: 'Category Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      categoryName: {
        title: 'Category Name',
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
  categories$: Observable<ICategory[]>;
  dialogRef: any;
  constructor(
    private route: Router,
    private store: Store<ICategory>,
  ) {
    this.categories$ = this.store.pipe(select(CategoriesSelector.selectAllCategories));
    this.categories$.subscribe(g => console.log(g.length));
  }
  ngOnInit() {
    this.store.dispatch(CategoriesActions.loadCategories({ categories: [] }));
  }
  navigateToCategoryDetail(event) {
    this.route.navigate(['pages/categories/category', event.data.categoryId]);
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete Category:' + event.data.categoryId + '?')) {
      this.store.dispatch(CategoriesActions.removeCategory({ categoryId: event.data.categoryId }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

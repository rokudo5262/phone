import { Component, OnInit } from '@angular/core';
import { IBrand } from '../../../../@core/data';
import { Observable } from 'rxjs/internal/Observable';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { BrandsActions } from '../../actions';
import { BrandsSelector } from '../../selectors';

@Component({
  selector: 'ngx-brands-smart-table',
  styleUrls: ['./brands-smart-table.component.scss'],
  templateUrl: './brands-smart-table.component.html',
})
export class BrandsSmartTableComponent implements OnInit {
  settings = {
    hideSubHeader: false,
    // selectMode: 'multi',
    edit: {
      editButtonContent: '<i class="nb-compose"></i>',
      // editButtonContent: '<i class="nb-edit"></i>',
      // saveButtonContent: '<i class="nb-checkmark"></i>',
      // cancelButtonContent: '<i class="nb-close"></i>',,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    pager: {
      display: true,
      perPage: 20,
    },
    columns: {
      brandId: {
        title: 'Brand Id',
        filter: true,
        type: 'number',
        editable: false,
      },
      brandName: {
        title: 'Brand Name',
        type: 'string',
        editable: true,
      },
      remark: {
        title: 'Remark',
        type: 'string',
        editable: true,
      },
      status: {
        title: 'Status',
        type: 'string',
        editable: false,
      },
    },
    actions: {
      add: false,
      delete: true,
      edit: false,
    },
  };
  brands$: Observable<IBrand[]>;
  dialogRef: any;
  constructor(
    private store: Store<IBrand>,
    private route: Router,
  ) {
    this.brands$ = this.store.pipe(select(BrandsSelector.selectAllBrands));
    this.brands$.subscribe(g => console.log(g.length));
  }
  ngOnInit () {
    this.store.dispatch(BrandsActions.loadBrands({ brands: [] }));
  }
  navigateToBrandDetail(event) {
    this.route.navigate(['pages/brands/brand/', event.data.brandId]);
  }
  delete(event) {
    if (window.confirm('Are you sure you want to delete Brand:' + event.data.brandId + '?')) {
      this.store.dispatch(BrandsActions.removeBrand({ brandId: event.data.brandId }));
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../../../@core/data/categories';
import { CategoriesSelectors } from '../../selectors';
import { CategoriesActions } from '../../actions';

@Component({
  selector: 'ngx-categories-detail',
  styleUrls: ['./categories-detail.component.scss'],
  templateUrl: './categories-detail.component.html',
})
export class CategoriesDetailComponent implements OnInit {
  categories$;
  categoriesId$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<ICategory>,
  ) {
    this.categoriesId$ = +this.router.snapshot.params.customerId;
    this.categories$ = this.store.pipe(select(CategoriesSelectors.selectCurrentCategory(this.categoriesId$)));
  }
  ngOnInit() {
    this.store.dispatch(CategoriesActions.loadCategories({ categories: [] }));
  }
  update() {
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/categories/library']);
  }
}

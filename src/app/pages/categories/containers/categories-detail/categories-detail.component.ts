import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../../../../@core/data/categories';
import { CategoriesSelectors } from '../../selectors';
import { CategoriesActions } from '../../actions';

@Component({
  selector: 'ngx-categories-detail',
  styleUrls: ['./categories-detail.component.scss'],
  templateUrl: './categories-detail.component.html',
})
export class CategoriesDetailComponent implements OnInit {
  category$;
  categoryId$: number;
  constructor(
    private router: ActivatedRoute,
    private store: Store<ICategory>,
  ) {
    this.categoryId$ = +this.router.snapshot.params.categoryId;
    this.category$ = this.store.pipe(select(CategoriesSelectors.selectCurrentCategory(this.categoryId$)));
    this.category$.subscribe(g => console.log(this.categoryId$));
  }
  ngOnInit() {
    this.store.dispatch(CategoriesActions.loadCategories({ categories: [] }));
  }
}

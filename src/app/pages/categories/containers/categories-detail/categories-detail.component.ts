import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../../../../@core/data/categories';
import { CategoriesSelectors } from '../../selectors';
import { CategoriesActions } from '../../actions';
import { CategoriesUpdateComponent } from '../../components';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-categories-detail',
  styleUrls: ['./categories-detail.component.scss'],
  templateUrl: './categories-detail.component.html',
})
export class CategoriesDetailComponent implements OnInit {
  @Input() category: ICategory;
  category$;
  categoryId$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<ICategory>,
    private dialogService: NbDialogService,
  ) {
    this.categoryId$ = +this.router.snapshot.params.categoryId;
    this.category$ = this.store.pipe(select(CategoriesSelectors.selectCurrentCategory(this.categoryId$)));
    this.category$.subscribe(g => console.log(this.categoryId$));
  }
  ngOnInit() {
    this.store.dispatch(CategoriesActions.loadCategories({ categories: [] }));
  }
  update() {
    this.dialogService.open(CategoriesUpdateComponent);
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/categories/library']);
  }
}

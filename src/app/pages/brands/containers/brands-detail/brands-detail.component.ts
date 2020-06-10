import { Component, OnInit, Input } from '@angular/core';
import { BrandsActions } from '../../actions';
import { BrandsSelector } from '../../selectors';
import { select, Store } from '@ngrx/store';
import { IBrand } from '../../../../@core/data/brands';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandsUpdateComponent } from '../../components/brands-update/brands-update.component';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-brands-detail',
  styleUrls: ['./brands-detail.component.scss'],
  templateUrl: './brands-detail.component.html',
})
export class BrandsDetailComponent implements OnInit {
  @Input() brand: IBrand;
  brand$;
  brandId$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private store: Store<IBrand>,
    private dialogService: NbDialogService,
  ) {
    this.brandId$ = +this.router.snapshot.params.brandId;
    this.brand$ = this.store.pipe(select(BrandsSelector.selectCurrentBrand(this.brandId$)));
    this.brand$.subscribe(g => console.log(this.brandId$));
  }
  ngOnInit() {
    this.store.dispatch(BrandsActions.loadBrands({ brands: [] }));
    // this.store.dispatch(BrandsActions.getBrandDetail({ brand: this.brand }));
  }
  update() {
    this.dialogService.open(BrandsUpdateComponent);
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/brands/library']);
  }
}

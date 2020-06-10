import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IStore } from '../../../../@core/data/stores';
import { StoresActions } from '../../actions';
import { StoresSelector } from '../../selectors';
import { NbDialogService } from '@nebular/theme';
import { StoresUpdateComponent } from '../../components/stores-update/stores-update.component';

@Component({
  selector: 'ngx-stores-detail',
  templateUrl: './stores-detail.component.html',
  styleUrls: ['./stores-detail.component.scss'],
})
export class StoresDetailComponent implements OnInit {
  @Input() store: IStore;
  store$;
  storeId$: number;
  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private storess: Store<IStore>,
    private dialogService: NbDialogService,
  ) {
    this.storeId$ = +this.router.snapshot.params.storeId;
    this.store$ = this.storess.pipe(select(StoresSelector.selectCurrentStore(this.storeId$)));
    this.store$.subscribe(g => console.log(this.storeId$));
  }
  ngOnInit() {
    this.storess.dispatch(StoresActions.loadStores({ stores: [] }));
  }
  update() {
    this.dialogService.open(StoresUpdateComponent);
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/stores/library']);
  }
}

import { OnInit, Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ProductsAddComponent } from '../../components/products-add/products-add.component';

@Component({
    selector: 'ngx-products-page',
    templateUrl: './products-page.component.html',
    styleUrls: ['./products-page.component.scss'],
})

export class ProductsPageComponent implements OnInit {
    constructor(
        private dialogService: NbDialogService,
    ) { }
    open() {
        this.dialogService.open(ProductsAddComponent);
    }
    ngOnInit() {
    }
}

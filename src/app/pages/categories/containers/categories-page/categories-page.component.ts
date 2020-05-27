import { OnInit, Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CategoriesAddComponent } from '../../components/categories-add/categories-add.component';

@Component({
    selector: 'ngx-categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss'],
})

export class CategoriesPageComponent implements OnInit {
    constructor(
        private dialogService: NbDialogService,
    ) { }
    
      ngOnInit() {
      }
      open() {
        this.dialogService.open(CategoriesAddComponent);
      }
}

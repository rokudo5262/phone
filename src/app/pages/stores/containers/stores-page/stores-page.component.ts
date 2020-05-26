import { OnInit, Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { StoresAddComponent } from '../../components/stores-add/stores-add.component';

@Component({
    selector: 'ngx-stores-page',
    templateUrl: './stores-page.component.html',
    styleUrls: ['./stores-page.component.scss'],
})

export class StoresPageComponent implements OnInit {
    constructor(
        private dialogService: NbDialogService,
    ) { }
    open() {
        this.dialogService.open(StoresAddComponent);
    }
    ngOnInit() {
    }
}

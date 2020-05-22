import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CustomersAddComponent } from '../../components/customers-add/customers-add.component';

@Component({
  selector: 'ngx-customers-page',
  styleUrls: ['./customers-page.component.scss'],
  templateUrl: './customers-page.component.html',
})
export class CustomersPageComponent implements OnInit {
  constructor(
    private dialogService: NbDialogService,
) { }

  ngOnInit() {
  }
  add() {
    this.dialogService.open(CustomersAddComponent);
  }
}

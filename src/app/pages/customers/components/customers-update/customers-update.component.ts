import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-customers-update',
  styleUrls: ['./customers-update.component.scss'],
  templateUrl: './customers-update.component.html',
})
export class CustomersUpdateComponent implements OnInit {
  public updateCustomerForm: FormGroup;
  constructor(
    private dialogRef: NbDialogRef<CustomersUpdateComponent>,
  ) { }
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}

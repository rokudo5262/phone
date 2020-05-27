import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-customers-add',
  styleUrls: ['./customers-add.component.scss'],
  templateUrl: './customers-add.component.html',
})
export class CustomersAddComponent implements OnInit {
  constructor(
    private dialogRef: NbDialogRef<CustomersAddComponent>,
  ) { }
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}

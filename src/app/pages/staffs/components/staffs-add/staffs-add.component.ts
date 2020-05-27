import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-staffs-add',
  styleUrls: ['./staffs-add.component.scss'],
  templateUrl: './staffs-add.component.html',
})
export class StaffsAddComponent implements OnInit {
  constructor(
    private dialogRef: NbDialogRef<StaffsAddComponent>,
  ) { }
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-staffs-update',
  styleUrls: ['./staffs-update.component.scss'],
  templateUrl: './staffs-update.component.html',
})
export class StaffsUpdateComponent implements OnInit {
  public updateStaffForm: FormGroup;
  constructor(
    private dialogRef: NbDialogRef<StaffsUpdateComponent>,
  ) { }
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}

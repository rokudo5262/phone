import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-stores-update',
  templateUrl: './stores-update.component.html',
  styleUrls: ['./stores-update.component.scss'],
})
export class StoresUpdateComponent implements OnInit {
  public updateStoreForm: FormGroup;
  constructor(
    private dialogRef: NbDialogRef<StoresUpdateComponent>,
  ) { }
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}

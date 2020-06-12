import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IStaff } from '../../../../@core/data/staffs';
import { Store } from '@ngrx/store';
import { StaffsActions } from '../../actions';

@Component({
  selector: 'ngx-staffs-add',
  styleUrls: ['./staffs-add.component.scss'],
  templateUrl: './staffs-add.component.html',
})
export class StaffsAddComponent implements OnInit {
  public addStaffForm: FormGroup;
  public staff: IStaff;
  @Output() response: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private store: Store<IStaff>,
    private dialogRef: NbDialogRef<StaffsAddComponent>,
  ) { }
  ngOnInit() {
    this.createForm();
  }
  createForm = () => {
    this.addStaffForm = this.fb.group({
      staffId: [0, Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      remark: ['', Validators.required],
      status: ['On', Validators.required],
      createdBy: ['1', Validators.required],
      lastUpdatedBy: ['1', Validators.required],
      deleted: [false, Validators.required],
    });
  }
  submit(item) {
    this.store.dispatch(StaffsActions.addStaff({ staff: item }));
    this.close();
  }
  close() {
    this.dialogRef.close();
  }
}

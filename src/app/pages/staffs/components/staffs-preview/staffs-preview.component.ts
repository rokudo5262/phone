import { Component, Input, OnInit } from '@angular/core';
import { IStaff } from '../../../../@core/data/staffs';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { StaffsUpdateComponent } from '../staffs-update/staffs-update.component';

@Component({
  selector: 'ngx-staffs-preview',
  templateUrl: './staffs-preview.component.html',
  styleUrls: ['./staffs-preview.component.scss'],
})

export class StaffsPreviewComponent implements OnInit {
  @Input() staff: IStaff;
  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
  }
  update() {
    this.dialogService.open(StaffsUpdateComponent);
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/staffs/library']);
  }
}

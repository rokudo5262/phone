import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { StaffsAddComponent } from '../../components';

@Component({
  selector: 'ngx-staffs-page',
  styleUrls: ['./staffs-page.component.scss'],
  templateUrl: './staffs-page.component.html',
})
export class StaffsPageComponent implements OnInit {
  constructor(
    private dialogService: NbDialogService,
) { }

  ngOnInit() {
  }
  add() {
    this.dialogService.open(StaffsAddComponent);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { IStaff } from '../../../../@core/data/staffs';

@Component({
  selector: 'ngx-staffs-preview',
  templateUrl: './staffs-preview.component.html',
  styleUrls: ['./staffs-preview.component.scss'],
})

export class StaffsPreviewComponent implements OnInit {
  @Input() staff: IStaff;
  constructor(
  ) { }
  ngOnInit() {
  }
}

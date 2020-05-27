import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-brands-add',
  styleUrls: ['./brands-add.component.scss'],
  templateUrl: './brands-add.component.html',
})
export class BrandsAddComponent implements OnInit {
  constructor(
    private dialogRef: NbDialogRef<BrandsAddComponent>,
  ) { }
  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}

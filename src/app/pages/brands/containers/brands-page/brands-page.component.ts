import { Component, OnInit } from '@angular/core';
import { BrandsAddComponent } from '../../components';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-brands-page',
  styleUrls: ['./brands-page.component.scss'],
  templateUrl: './brands-page.component.html',
})
export class BrandsPageComponent implements OnInit {
  constructor(
    private dialogService: NbDialogService,
) { }

  ngOnInit() {
  }
  open() {
    this.dialogService.open(BrandsAddComponent);
  }
}

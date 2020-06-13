import { Component, Input, OnInit } from '@angular/core';
import { IBrand } from '../../../../@core/data/brands';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { BrandsUpdateComponent } from '../brands-update/brands-update.component';

@Component({
  selector: 'ngx-brands-preview',
  templateUrl: './brands-preview.component.html',
  styleUrls: ['./brands-preview.component.scss'],
})

export class BrandsPreviewComponent implements OnInit {
  @Input() brand: IBrand;
  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
  }
  update() {
    this.dialogService.open(BrandsUpdateComponent, {
      context: {
        brand: this.brand,
      },
    });
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/brands/library']);
  }
}

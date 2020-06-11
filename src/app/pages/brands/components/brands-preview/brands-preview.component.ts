import { Component, Input, OnInit } from '@angular/core';
import { IBrand } from '../../../../@core/data/brands';

@Component({
  selector: 'ngx-brands-preview',
  templateUrl: './brands-preview.component.html',
  styleUrls: ['./brands-preview.component.scss'],
})

export class BrandsPreviewComponent implements OnInit {
  @Input() brand: IBrand;
  constructor(
  ) { }
  ngOnInit() {
  }
}

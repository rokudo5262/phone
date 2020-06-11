import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../../../@core/data/categories';

@Component({
  selector: 'ngx-categories-preview',
  templateUrl: './categories-preview.component.html',
  styleUrls: ['./categories-preview.component.scss'],
})

export class CategoriesPreviewComponent implements OnInit {
  @Input() category: ICategory;
  constructor(
  ) { }
  ngOnInit() {
  }
}

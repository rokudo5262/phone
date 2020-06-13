import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../../../@core/data/categories';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { CategoriesUpdateComponent } from '../categories-update/categories-update.component';

@Component({
  selector: 'ngx-categories-preview',
  templateUrl: './categories-preview.component.html',
  styleUrls: ['./categories-preview.component.scss'],
})

export class CategoriesPreviewComponent implements OnInit {
  @Input() category: ICategory;
  constructor(
    private route: Router,
    private dialogService: NbDialogService,
  ) { }
  ngOnInit() {
  }
  update() {
    this.dialogService.open(CategoriesUpdateComponent, {
      context: {
        category: this.category,
      }
    });
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/categories/library']);
  }
}

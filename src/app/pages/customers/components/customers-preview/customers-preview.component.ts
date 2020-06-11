import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../../../../@core/data';

@Component({
  selector: 'ngx-customers-preview',
  templateUrl: './customers-preview.component.html',
  styleUrls: ['./customers-preview.component.scss'],
})

export class CustomersPreviewComponent implements OnInit {
  @Input() customer: ICustomer;
  constructor(
  ) { }
  ngOnInit() {
  }
}

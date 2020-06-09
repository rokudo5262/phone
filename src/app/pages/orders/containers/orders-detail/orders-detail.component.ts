import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.scss'],
})
export class OrdersDetailComponent implements OnInit {
  constructor(
    private route: Router,
  ) { }
  ngOnInit() {
  }
  update() {
  }
  delete() {
  }
  back() {
    this.route.navigate(['pages/orders/library']);
  }
}

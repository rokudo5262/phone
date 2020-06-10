import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../../../@core/data/orders';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  API_PATH = 'http://localhost:5000/api/orders';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  order: IOrder;
  orders: IOrder[];
  constructor(
    private http: HttpClient,
  ) { }
  // ----------------------------------------------------------------------------------------
  load_orders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  get_order_detail(): Observable<IOrder> {
    return this.http.get<IOrder>(this.API_PATH, this.options);
  }
  // ----------------------------------------------------------------------------------------
  add_order(order: IOrder) {
    return this.http.post<IOrder>(this.API_PATH, order, this.options);
  }
  // ----------------------------------------------------------------------------------------
  update_order(changes: Partial<IOrder>) {
    return this.http.put<IOrder>(this.API_PATH + '/' + changes.orderId, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
  remove_order(orderId: number) {
    return this.http.delete<IOrder>(this.API_PATH + '/' + orderId, this.options);
  }
  // ----------------------------------------------------------------------------------------
  delete_order(changes: Partial<IOrder>) {
    return this.http.put<IOrder>(this.API_PATH + '/' + changes.orderId, changes, this.options);
  }
  // ----------------------------------------------------------------------------------------
}

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../../@core/data';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  API_PATH = 'http://localhost:5000/api/products';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  product: IProduct;
  products: IProduct[];
  constructor(
    private http: HttpClient,
  ) { }
  // ----------------------------------------------------------------------------------------
  load_products(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_PATH, this.options);
  }
  add_product(product: IProduct) {
    return this.http.post<IProduct>(this.API_PATH, product, this.options);
  }
  update_product(changes: Partial<IProduct>) {
    return this.http.put<IProduct>(this.API_PATH + '/' + changes.productId, changes, this.options);
  }
  remove_product(productId: number) {
    return this.http.delete<IProduct>(this.API_PATH + '/' + productId, this.options);
  }
  delete_product(changes: Partial<IProduct>) {
    return this.http.put<IProduct>(this.API_PATH + '/' + changes.productId, changes, this.options);
  }
}

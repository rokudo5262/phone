import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../../../@core/data';

@Injectable({
    providedIn: 'root',
})
export class CustomersService {
    API_PATH = 'http://localhost:5000/api/customers';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'mode': 'no-cors',
        }),
    };
    customer: ICustomer;
    customers: ICustomer[];
    constructor(
        private http: HttpClient,
    ) { }
    // ----------------------------------------------------------------------------------------
    load_customers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.API_PATH, this.options);
    }
    add_customer(customer: ICustomer) {
        return this.http.post<ICustomer>(this.API_PATH, customer, this.options);
    }
    update_customer(changes: Partial<ICustomer>) {
        return this.http.put<ICustomer>(this.API_PATH + '/' + changes.customerId, changes, this.options);
    }
    delete_customer(changes: Partial<ICustomer>) {
        return this.http.put<ICustomer>(this.API_PATH + '/' + changes.customerId, changes, this.options);
    }
    remove_customer(customerId: number) {
        return this.http.delete<ICustomer>(this.API_PATH + '/' + customerId, this.options);
    }
}

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from '../../../@core/data/brands';

@Injectable({
    providedIn: 'root',
})
export class BrandsService {
    API_PATH = 'http://localhost:5000/api/brands';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'mode': 'no-cors',
        }),
    };
    brandCookiesString = 'BRANDS_COOKIES';
    brand: IBrand;
    brands: IBrand[];
    constructor(
        private http: HttpClient,
    ) { }
    // ----------------------------------------------------------------------------------------
    load_brands(): Observable<IBrand[]> {
        return this.http.get<IBrand[]>(this.API_PATH, this.options);
    }
    add_brand(brand: IBrand) {
        return this.http.post<IBrand>(this.API_PATH, brand, this.options);
    }
    update_brand(changes: Partial<IBrand>) {
        return this.http.put<IBrand>(this.API_PATH + '/' + changes.brandId, changes, this.options);
    }
    delete_brand(changes: Partial<IBrand>) {
        return this.http.put<IBrand>(this.API_PATH + '/' + changes.brandId, changes, this.options);
    }
    remove_brand(brandid: number) {
        return this.http.delete<IBrand>(this.API_PATH + '/' + brandid, this.options);
    }
}

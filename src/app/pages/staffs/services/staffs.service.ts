import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStaff } from '../../../@core/data';

@Injectable({
    providedIn: 'root',
})
export class StaffsService {
    API_PATH = 'http://localhost:5000/api/staffs';
    options = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'mode': 'no-cors',
        }),
    };
    brand: IStaff;
    brands: IStaff[];
    constructor(
        private http: HttpClient,
    ) { }
    // ----------------------------------------------------------------------------------------
    load_staffs(): Observable<IStaff[]> {
        return this.http.get<IStaff[]>(this.API_PATH, this.options);
    }
    add_staff(brand: IStaff) {
        return this.http.post<IStaff>(this.API_PATH, brand, this.options);
    }
    update_staff(changes: Partial<IStaff>) {
        return this.http.put<IStaff>(this.API_PATH + '/' + changes.staffId, changes, this.options);
    }
    delete_staff(changes: Partial<IStaff>) {
        return this.http.put<IStaff>(this.API_PATH + '/' + changes.staffId, changes, this.options);
    }
    remove_staff(staffId: number) {
        return this.http.delete<IStaff>(this.API_PATH + '/' + staffId, this.options);
    }
}

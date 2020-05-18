import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../../../@core/data';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  API_PATH = 'http://localhost:5000/api/categories';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  category: ICategory;
  categories: ICategory[];
  constructor(
    private http: HttpClient,
  ) { }
  // ----------------------------------------------------------------------------------------
  load_categories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.API_PATH, this.options);
  }
  add_category(category: ICategory) {
    return this.http.post<ICategory>(this.API_PATH, category, this.options);
  }
  update_category(changes: Partial<ICategory>) {
    return this.http.put<ICategory>(this.API_PATH + '/' + changes.category_id, changes, this.options);
  }
  delete_category(changes: Partial<ICategory>) {
    return this.http.put<ICategory>(this.API_PATH + '/' + changes.category_id, changes, this.options);
  }
  remove_category(category_id: number) {
    return this.http.delete<ICategory>(this.API_PATH + '/' + category_id, this.options);
  }
}

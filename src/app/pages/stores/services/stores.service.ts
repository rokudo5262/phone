import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStore } from '../../../@core/data';

@Injectable({
  providedIn: 'root',
})
export class StoresService {
  API_PATH = 'http://localhost:5000/api/stores';
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'mode': 'no-cors',
    }),
  };
  store: IStore;
  stores: IStore[];
  constructor(
    private http: HttpClient,
  ) { }
  // ----------------------------------------------------------------------------------------
  load_stores(): Observable<IStore[]> {
    return this.http.get<IStore[]>(this.API_PATH, this.options);
  }
  add_store(store: IStore) {
    return this.http.post<IStore>(this.API_PATH, store, this.options);
  }
  update_store(changes: Partial<IStore>) {
    return this.http.put<IStore>(this.API_PATH + '/' + changes.storeId, changes, this.options);
  }
  remove_store(storeId: number) {
    return this.http.delete<IStore>(this.API_PATH + '/' + storeId, this.options);
  }
  delete_store(changes: Partial<IStore>) {
    return this.http.put<IStore>(this.API_PATH + '/' + changes.storeId, changes, this.options);
  }
}

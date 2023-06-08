import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/Item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private baseUrl : string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  get() : Observable<Item[]>{
    return this.http.get<Item[]>(`${this.baseUrl}/items`);
  }
  getById(id: string): Observable<Item>{
    return this.http.get<Item>(`${this.baseUrl}/items/${id}`);
  }
  post(item: Item): Observable<Item>{
    return this.http.post<Item>(`${this.baseUrl}/items`,item);
  }
  put(item: Item): Observable<Item>{
    return this.http.put<Item>(`${this.baseUrl}/items/${item.id}`,item);
  }
  delete(id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/items/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:8082/fooddelivery/restaurant';
 
  constructor(private http: HttpClient) { }
 
  searchByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?name=${name}`);
  }
 
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8085/fooddelivery/category');
  }
  getTopRestaurants(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8082/fooddelivery/restaurant/all');
  }
}

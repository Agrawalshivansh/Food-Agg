import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  private apiUrl = ''; // Replace this with your actual API endpoint

  constructor(private http: HttpClient) { }
  private orderSuccessSubject: Subject<any> = new Subject<any>();
  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  placeOrder(orderData: any): Observable<any> {
    this.orderSuccessSubject.next(orderData);
    return this.http.post<any>(this.apiUrl, orderData);
  }

  // Method to subscribe to order success events
  onOrderSuccess(): Observable<any> {
    return this.orderSuccessSubject.asObservable();
  }
}

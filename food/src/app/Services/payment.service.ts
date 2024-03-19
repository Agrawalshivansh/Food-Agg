import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = ''; // Replace this with your actual API endpoint

  constructor(private http: HttpClient) { }

  // Method to make a POST request to process payment
  processPayment(paymentData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, paymentData);
  }
}

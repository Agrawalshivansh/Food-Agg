import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  sendResetLink(email: string): Observable<any> {
    return this.http.post<any>('/api/forgot-password', { email });
  }
}

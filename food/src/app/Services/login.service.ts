// import { Injectable } from '@angular/core';
// import { register } from '../login/login.component';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {
//   private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//   private baseUrl = "http://localhost:8083/api/v/login";

//   constructor(private httpClient: HttpClient) { }

//   loginUser(register: register){
//     return this.httpClient.post(`${this.baseUrl}`, register).pipe(tap(response=>{
      
//     }))
//   }
// logout(): void {
//   // this.loggedIn.next(false);
// }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = "http://localhost:8083/api/v/login";
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  isLoggedIn = false;
  constructor(private httpClient: HttpClient,private router: Router, ) { }

  // loginUser(register: any): Observable<any> {
  //   return this.httpClient.post<any>(`${this.baseUrl}`, register);
  // }

  loginUser(register: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}`, register)
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
  }
}

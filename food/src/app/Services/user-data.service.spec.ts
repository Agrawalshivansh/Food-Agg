// import { TestBed } from '@angular/core/testing';

// import { UserDataService } from './user-data.service';

// describe('UserDataService', () => {
//   let service: UserDataService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UserDataService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/profile`);
  }

  updateUserProfile(profileData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profile`, profileData);
  }
}

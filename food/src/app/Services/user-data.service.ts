import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userProfileUrl = 'http://example.com/api/user'; // Replace with your backend API URL for user profile

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<any> {
    return this.http.get<any>(this.userProfileUrl)
      .pipe(
        catchError(error => {
          // Handle errors
          console.error('Error fetching user profile:', error);
          throw error;
        })
      );
  }

  updateUserProfile(profileData: any): Observable<any> {
    return this.http.put<any>(this.userProfileUrl, profileData)
      .pipe(
        catchError(error => {
          // Handle errors
          console.error('Error updating user profile:', error);
          throw error;
        })
      );
  }
}

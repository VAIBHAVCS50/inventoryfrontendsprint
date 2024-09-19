import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject, catchError, of, tap, throwError } from 'rxjs';
import { Employee } from '../../models/Employee';
import { environment } from '../../../environments/environment.prod'; // Adjust the import path as needed

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const GRAPH_ENDPOINT1 = 'https://graph.microsoft.com/v1.0/me/photo/$value';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  private apiUrl = environment.apiUrl; // Use the API base URL from environment
  private userSubject = new BehaviorSubject<Profilee | null>(null);
  private userRoleSubject = new BehaviorSubject<any | null>(null);
  private profilePhotoSubject = new ReplaySubject<Blob>(1);

  constructor(private http: HttpClient) {}

  getuser(): Observable<Profilee> {
    if (this.userSubject.value) {
      return of(this.userSubject.value);
    } else {
      console.log("Fetching user details");
      return this.http.get<Profilee>(GRAPH_ENDPOINT).pipe(
        tap(user => this.userSubject.next(user))
      );
    }
  }



  getuserProfilePhoto(): Observable<Blob> {
    console.log("Fetching user profile photo");
    return this.http.get<Blob>(GRAPH_ENDPOINT1, { responseType: 'blob' as 'json' });
  }

  insertProfile(profile: Profilee) {
    return this.http.post<any>(`${this.apiUrl}/Profile/Insert`, profile);
  }

  getUserRole(userId: string): Observable<any> {
    if (this.userRoleSubject.value) {
      console.log("i was already  hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      return of(this.userRoleSubject.value);
    } else {
      console.log("Fetching user role for userID:", userId);
      return this.http.get<any>(`${this.apiUrl}/Profile/${userId}`).pipe(
        tap(role => this.userRoleSubject.next(role))
      );
    }
  }


  getallEmployees(userid: string): Observable<Employee[]> {
    console.log("Fetching all employees for userID:", userid);
    return this.http.get<any>(`${this.apiUrl}/Profile/allemployes?userid=${userid}`);
  }
}

export interface Profilee {
  givenName: string,
  surname: string,
  userPrincipalName: string,
  id: string,
  jobTitle: string
};

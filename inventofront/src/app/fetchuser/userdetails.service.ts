import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Employee } from '../../models/Employee';



const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const GRAPH_ENDPOINT1 = 'https://graph.microsoft.com/v1.0/me/photo/$value';
@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  private apiUrl = 'https://localhost:44378/api/Profile/Insert';

  constructor(private http: HttpClient) { 

    
  }

  getuser(){
   return this.http.get<Profilee>(GRAPH_ENDPOINT);
  }

  getuserProfilePhoto(): Observable<Blob> {
    console.log("I was called again");
    return this.http.get(GRAPH_ENDPOINT1, { responseType: 'blob' }).pipe(
      tap({
        next: (data) => {
          console.log('Data received:', data);
        },
        error: (error) => {
          console.error('Error:', error);
        }
      }),
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    // Handle the error here
    console.error('An error occurred:', error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  

  insertProfile(profile:Profilee){
    return this.http.post<any>(this.apiUrl,profile);
  }

  getUserRole(userId: string) {
    console.log("userID",userId);
    return this.http.get<any>(`https://localhost:44378/api/Profile/${userId}`, {

    });
  }

  getallEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('https://localhost:44378/api/Profile/allemployes');
  }


}

export interface Profilee {
  givenName: string,
  surname: string,
  userPrincipalName: string,
  id: string,
  jobTitle:string
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class ManageRolesService {
  private apiUrl = environment.apiUrl; // Use the API base URL from environment

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Profile/allemployes`);
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Role`);
  }

  updateEmployeeRole(request: { id: string; role: string }): Observable<void> {
    console.log("inside the function");
    return this.http.put<void>(`${this.apiUrl}/Role/change-role`, request);
  }
}

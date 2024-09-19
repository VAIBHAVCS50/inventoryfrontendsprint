import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment'; // Adjust the import path as needed
import { environment } from '../../environments/environment.prod'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private apiUrl = environment.apiUrl; // Use the API base URL from environment
  constructor(private http: HttpClient) { }

  getSetting(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Setting`);
  }

  updateSetting(newValue: boolean): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/Setting`
    , newValue);
  }

}

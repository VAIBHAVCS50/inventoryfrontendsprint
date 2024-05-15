import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IsloggedinService {
  private authenticationStatus$ = new Subject<boolean>();

  constructor(private authService: MsalService,private http:HttpClient) {}

  isLoggedIn(): boolean {
    console.log("i was called");
    return this.authService.instance.getAllAccounts().length > 0;
  }
  

  // Method to get the observable for authentication status changes
  getAuthenticationStatus$() {
    return this.authenticationStatus$.asObservable();
  }

  // Method to notify subscribers when authentication status changes
  notifyAuthenticationStatusChange() {
    this.authenticationStatus$.next(this.isLoggedIn());
  }

  async getphoto(){

    const response = this.http.get('https://graph.microsoft.com/v1.0/me/photo/$value');
    console.log(response);

  }
  
}


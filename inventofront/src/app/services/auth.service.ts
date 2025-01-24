import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { BehaviorSubject, filter, Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  profile: any;
  loginStatus: boolean = false;
  private readonly _destroying$ = new Subject<void>();
  private authStateSubject = new BehaviorSubject<boolean>(false);
  authState$: Observable<boolean> = this.authStateSubject.asObservable();

  constructor(private broadcastService: MsalBroadcastService,private route: Router,@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, private msalService: MsalService) {     
    
    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.setLoginDisplay();
    });

  this.broadcastService.msalSubject$
    .pipe(
      filter(
        (msg: EventMessage) =>
          msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED
      )
    )
    .subscribe(() => {
      
      if (this.msalService.instance.getAllAccounts().length === 0) {
        this.route.navigate(['/login']);
      } else {
        this.setLoginDisplay();
      }
    });

    
}
  getUserDetails(){
    const profileData = this.msalService.instance.getAllAccounts()[0];
    this.profile = {name: profileData.name, mail: profileData.username}
    return this.profile;
  }

  microsoftLogin() {
    if (this.msalGuardConfig.authRequest) {
      this.msalService.loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
        .subscribe({
          next: (response: AuthenticationResult) => {
            this.msalService.instance.setActiveAccount(response.account); // Set the active account after login
            this.setLoginDisplay();
          },
          error: (error) => {
            console.error('Login failed', error);
          },
        });
    } else {
      this.msalService.loginPopup()
        .subscribe({
          next: (response: AuthenticationResult) => {
            this.msalService.instance.setActiveAccount(response.account); // Set the active account after login
            this.setLoginDisplay();
          },
          error: (error) => {
            console.error('Login failed', error);
          },
        });
  }
}
  
  setLoginDisplay() {
    this.loginStatus = this.msalService.instance.getAllAccounts().length > 0;
    this.authStateSubject.next(this.loginStatus);

    if(this.loginStatus){
      const profile_data = this.msalService.instance.getAllAccounts()[0];
      this.msalService.instance.setActiveAccount(profile_data)
    } else {
      console.log("Not logged-in");
      // Redirect to Login page
      this.route.navigate(['/login']);
    }

  }

  microsoftLogout() {
    this.msalService.logoutPopup({
      postLogoutRedirectUri: '/', // Specify the default page route here (e.g., Home page or Login page)
    }).subscribe({
      next: () => {
        this.setLoginDisplay(); // Reset the login state
        this.route.navigate(['/']); // Redirect programmatically if needed
      },
      error: (error) => {
        console.error('Logout failed', error);
      },
    });
  

  }
  isAuthenticated(): boolean {
    return this.authStateSubject.getValue();
  }

}

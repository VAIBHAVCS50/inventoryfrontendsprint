import { Injectable } from '@angular/core';
import { PublicClientApplication, InteractionType, EventType } from '@azure/msal-browser';
@Injectable({
  providedIn: 'root'
})
export class MsalServiceService {
  acquireTokenSilent(arg0: { scopes: string[]; }) {
    throw new Error('Method not implemented.');
  }
  private msalInstance: PublicClientApplication;

  constructor() {
    this.msalInstance = new PublicClientApplication({
      auth: {
        clientId: "40dd6f87-4874-44bb-bb40-34cbe1a70f01", // Application (client) ID from the app registration
        authority:
          "https://login.microsoftonline.com/ed5d5f47-52dd-48af-90ca-f7bd83624eb9", // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        redirectUri: "https://localhost:4200", // This is your redirect URI
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false, 
    
        
      },
    });

    this.msalInstance.initialize()
    .then(() => {
      console.log('MSAL initialized');
      this.configureMsalInstance();
    })

  }

  private configureMsalInstance(): void {
    this.msalInstance.addEventCallback((message:any) => {
      if (message.eventType === EventType.LOGIN_SUCCESS) {
        console.log('Login success');
      }
    });


    this.msalInstance.setActiveAccount(this.msalInstance.getAllAccounts()[0]);

    
  }

  getMsalInstance(): PublicClientApplication {
    return this.msalInstance;
  }


}

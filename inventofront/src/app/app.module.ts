import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from "@azure/msal-angular";
import { MsalServiceService } from '../app/msal-service.service'; 
import { InteractionType } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from  '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { NotloggedcComponent } from './notloggedc/notloggedc.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { AppRequestConfirmationModalComponent } from './app-request-confirmation-modal/app-request-confirmation-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequeststatusComponent } from './requeststatus/requeststatus.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AusersComponent } from './ausers/ausers.component'; // Import ReactiveFormsModule
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { AuserdetailsComponent } from './auserdetails/auserdetails.component';
import { GatepassComponent } from './gatepass/gatepass.component';



const msalService = new MsalServiceService();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    NotloggedcComponent,
    AboutusComponent,
    ProfileComponent,
    AppRequestConfirmationModalComponent,
    RequeststatusComponent,
    AddinventoryComponent,
    FooterComponent,
    WelcomepageComponent,
    AusersComponent,
    AuserdetailsComponent,
    GatepassComponent
  ],
  imports: [
    MsalModule.forRoot(
      msalService.getMsalInstance(),
       {
        interactionType: InteractionType.Popup, // MSAL Guard Configuration
        authRequest: {
          scopes: ['user.read'], // Scopes requested during authentication
        },
      },
        {
          interactionType: InteractionType.Popup, // MSAL Interceptor Configuration
          protectedResourceMap: new Map([
            ['https://graph.microsoft.com/v1.0/me', ['user.read']], // Mapping of protected resources and required scopes
          ]),
        }

    ),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MsalModule,
    NgbModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule ,
    MatCardModule,
    MatSnackBarModule,
    
    FormsModule,

    
  ],
  providers: [MsalGuard,
    // provideClientHydration(),
    // provideHttpClient(withInterceptors([requestInterceptor])),
    // {provide:APP_INITIALIZER,useFactory:initFactory,deps:[InitService],multi:true},
    // provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    provideAnimationsAsync()],
    bootstrap: [AppComponent]
})
export class AppModule { }

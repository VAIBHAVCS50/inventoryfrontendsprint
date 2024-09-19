import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { InteractionType, PopupRequest, RedirectRequest, AuthenticationResult } from '@azure/msal-browser';
import { UserdetailsService } from '../fetchuser/userdetails.service';
import { CartserviceService } from '../cartservice.service';
import { DomSanitizer } from '@angular/platform-browser';
import { IsloggedinService } from '../isloggedin.service';
import { MsalServiceService } from '../msal-service.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-loginauthentication',
  templateUrl: './loginauthentication.component.html',
  styleUrl: './loginauthentication.component.scss'
})
export class LoginauthenticationComponent {
  loginDisplay: boolean = false;
  showEmailLoginForm: boolean = false;
  email: string = '';
  password: string = '';
  private modalRef: NgbModalRef | null = null;

  constructor(
    private modalService: NgbModal,
    private getservice: UserdetailsService,
    private cartService: CartserviceService,
    private sanitizer: DomSanitizer,
    private userService: UserdetailsService,
    private router: Router,
    private islogd: IsloggedinService,
    private registeruser: UserdetailsService,
    private authService: MsalService,
    private broadcastService: MsalBroadcastService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private msalService: MsalServiceService
  ) {}

  ngOnInit(): void {
    this.setLoginDisplay();
  }

  openLoginModal(content: any): void {
    this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  showEmailLogin(): void {
    this.showEmailLoginForm = true;
  }

  showLoginChoices(): void {
    this.showEmailLoginForm = false;
  }

  loginWithMs(): void {
    const authRequest = this.msalGuardConfig.authRequest || {};

    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.loginPopup({ ...authRequest } as PopupRequest)
        .subscribe({
          next: (result: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(result.account);
            this.setLoginDisplay();
            if (this.modalRef) {
              this.modalRef.close();
            }
          },
          error: (error) => console.log(error)
        });
    } else {
      this.authService.loginRedirect({ ...authRequest } as RedirectRequest);
    }
  }

  loginWithEmail(modal: any): void {
    // Implement your email and password login logic here
    // For example, call an API to authenticate the user
    // this.userService.authenticateWithEmail(this.email, this.password).subscribe({
    //   next: (user) => {
    //     console.log('User authenticated:', user);
    //     this.loginDisplay = true;
    //     // Save user information and navigate to the desired route
    //     // Update local storage, etc.
    //     if (this.modalRef) {
    //       this.modalRef.close();
    //     }
    //   },
    //   error: (error) => {
    //     console.log('Error during email authentication:', error);
    //   }
    // });
  }

  logout(): void {
    localStorage.removeItem('profile');
    localStorage.removeItem('profilePhoto');
    this.islogd.notifyAuthenticationStatusChange();

    this.authService.logoutPopup({
      mainWindowRedirectUri: "/"
    });
  }

  private setLoginDisplay(): void {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
}

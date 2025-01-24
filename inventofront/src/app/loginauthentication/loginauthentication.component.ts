import { Component, Inject, Input, OnInit } from '@angular/core';


import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-loginauthentication',
  templateUrl: './loginauthentication.component.html',
  styleUrl: './loginauthentication.component.scss'
})
export class LoginauthenticationComponent {
  
  showEmailLoginForm: boolean = false;
  email: string = '';
  password: string = '';
  @Input() loginDisplay!: boolean; // Declare an input property

  constructor(private authService: AuthService) {} 
  MsLogin() {
    this.authService.microsoftLogin(); // Call the microsoftLogin() method from the AuthService
  }
  MsLogout() {
    this.authService.microsoftLogout(); // Call the microsoftLogin() method from the AuthService
  }
//   ngOnInit(): void {
//     this.setLoginDisplay();
//   }

//   openLoginModal(content: any): void {
//     this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
//   }

//   showEmailLogin(): void {
//     this.showEmailLoginForm = true;
//   }

//   showLoginChoices(): void {
//     this.showEmailLoginForm = false;
//   }

//   loginWithMs(): void {
//     const authRequest = this.msalGuardConfig.authRequest || {};

//     if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
//       this.authService.loginPopup({ ...authRequest } as PopupRequest)
//         .subscribe({
//           next: (result: AuthenticationResult) => {
//             this.authService.instance.setActiveAccount(result.account);
//             this.setLoginDisplay();
//             if (this.modalRef) {
//               this.modalRef.close();
//             }
//           },
//           error: (error) => console.log(error)
//         });
//     } else {
//       this.authService.loginRedirect({ ...authRequest } as RedirectRequest);
//     }
//   }

//   loginWithEmail(modal: any): void {
//     // Implement your email and password login logic here
//     // For example, call an API to authenticate the user
//     // this.userService.authenticateWithEmail(this.email, this.password).subscribe({
//     //   next: (user) => {
//     //     console.log('User authenticated:', user);
//     //     this.loginDisplay = true;
//     //     // Save user information and navigate to the desired route
//     //     // Update local storage, etc.
//     //     if (this.modalRef) {
//     //       this.modalRef.close();
//     //     }
//     //   },
//     //   error: (error) => {
//     //     console.log('Error during email authentication:', error);
//     //   }
//     // });
//   }

//   logout(): void {
//     localStorage.removeItem('profile');
//     localStorage.removeItem('profilePhoto');
//     this.islogd.notifyAuthenticationStatusChange();

//     this.authService.logoutPopup({
//       mainWindowRedirectUri: "/"
//     });
//   }

//   private setLoginDisplay(): void {
//     this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
//   }
// }

}

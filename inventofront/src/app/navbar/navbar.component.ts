import { Component, ComponentFactoryResolver, Inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { IsloggedinService } from '../isloggedin.service';
import { UserdetailsService } from '../fetchuser/userdetails.service';
import { Subject, filter, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { MsalServiceService } from '../msal-service.service';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { HomepageComponent } from '../homepage/homepage.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CartserviceService } from '../cartservice.service';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showDetails: boolean = false;
  showDropdown: boolean = false;
  loginDisplay: boolean = false;
  profilePhotoBlob!: Blob;
  cartItemsCount: number = 0;
  isIframe: boolean = true;
  role: string = "employee";
  photoloaded: boolean = false;
  profile!: Profilee;
  vab!: sad;
  profilePhotoUrl!: SafeUrl;
  prefix: string = '';
  private readonly _destroying$ = new Subject<void>();

  // @ViewChild('childTemplate', { read: ViewContainerRef }) childTemplate!: ViewContainerRef;
  // @ViewChild('sidebarContent', { static: true }) sidebarContent!: TemplateRef<any> ;

  constructor(
    private cartSidebar: CartserviceService,
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

  toggleSidebar() {
    this.cartSidebar.openSidebar();
  }


  ngOnInit(): void {
    this.initializeLoginDisplay();
    this.setupCartSubscription();
    this.checkFunctionality();

    this.broadcastService.msalSubject$
    .pipe(filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS))
    .subscribe((result: EventMessage) => {
      console.log(result);
      this.updateLoginDisplay();
      this.fetchAndStoreUserProfile();
    });


    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.updateLoginDisplay();
      this.fetchAndStoreUserProfile();
      this.checkFunctionality();
      this.getphoto();
    });
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  toggleDropdown(): void {
    this.showDetails = !this.showDetails;
  }

  private initializeLoginDisplay(): void {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;

    if (this.islogd.isLoggedIn()) {
      this.fetchAndStoreUserProfile();
      this.getphoto();
    }
  }

  private fetchAndStoreUserProfile(): void {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      this.profile = JSON.parse(storedProfile);
      this.setUserDetails(this.profile);
      this.checkFunctionality(); // Ensure role is checked after profile is set

    } else {
      this.registeruser.getuser().subscribe(
        (data) => {
          console.log(data);
          this.profile = data;
          localStorage.setItem('profile', JSON.stringify(data));
          this.setUserDetails(this.profile);
                    this.checkFunctionality(); // Ensure role is checked after profile is set
                   

        },
        (error) => console.log(error)
      );
    }
  }

  private setUserDetails(profile: any): void {
    this.vab = {
      givenName: profile.givenName,
      surname: profile.surname,
      userPrincipalName: profile.userPrincipalName,
      id: profile.id,
      jobTitle: profile.jobTitle
    };
    this.photoloaded = true;
  }


  private setupCartSubscription(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemsCount = items.reduce((acc, item) => acc + item.requestedQuantity, 0);
    });
  }

  private updateLoginDisplay(): void {
    this.islogd.notifyAuthenticationStatusChange();
    this.loginDisplay = this.islogd.isLoggedIn();
  }

  private checkFunctionality(): void {
    this.loginDisplay = this.islogd.isLoggedIn();
    const storedData = localStorage.getItem('profile');
    this.saveProfile();
    if (storedData) {
      this.prefix = this.profile.id;
      console.log("yes vaibhav you are correct");
      this.userService.getUserRole(this.prefix).subscribe(
        (role) => {
          this.role = role.role;
          console.log(role);
        },
        (error) => console.log(error)
      );
    }
  }

  saveProfile() {
    this.registeruser.getuser().subscribe((data) => {
      console.log(data);
      this.profile = data;

      this.vab = {
        givenName: this.profile.givenName,
        surname: this.profile.surname,
        userPrincipalName: this.profile.userPrincipalName,
        id: this.profile.id,
        jobTitle: this.profile.jobTitle
      };
      this.photoloaded = true;

      console.log(this.vab);

      this.registeruser.insertProfile(this.vab).subscribe({
        next: (v) => { console.log(v); },
        error: (e) => console.error(e)
      });
    });
    
  }

  getphoto() {
    const storedPhoto = localStorage.getItem('profilePhoto');
    if (storedPhoto) {
      this.profilePhotoBlob = this.convertBase64ToBlob(storedPhoto);
      this.profilePhotoUrl = this.sanitizer.bypassSecurityTrustUrl(storedPhoto);
      console.log('Profile photo loaded from local storage');
    } else {
      console.log("I entered inside fetchimage");
      this.getservice.getuserProfilePhoto().subscribe({
        next: (photoBlob: Blob) => {
          this.profilePhotoBlob = photoBlob;
          console.log('Profile photo Blob:', this.profilePhotoBlob);
          this.convertBlobToBase64();
        },
        error: (e) => {
          console.error('Error fetching profile photo:', e);
        },
        complete: () => {
          console.log('Fetch image request completed.');
        }
      });
    }
  }

convertBlobToBase64() {
  const reader = new FileReader();
  reader.readAsDataURL(this.profilePhotoBlob);
  reader.onloadend = () => {
    const base64data = reader.result as string;
    localStorage.setItem('profilePhoto', base64data);
    this.profilePhotoUrl = this.sanitizer.bypassSecurityTrustUrl(base64data);
    console.log('Profile photo stored in local storage:', base64data);
  };
}

convertBase64ToBlob(base64: string): Blob {
  const byteString = atob(base64.split(',')[1]);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/jpeg' }); // Adjust the MIME type if necessary
}
}



export interface sad {
  givenName: string,
  surname: string,
  userPrincipalName: string,
  id: string
  jobTitle:string
};

export interface Profilee {
  givenName: string,
  surname: string,
  userPrincipalName: string,
  id: string,
  jobTitle:string
};

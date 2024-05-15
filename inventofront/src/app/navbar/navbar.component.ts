import { Component, ComponentFactoryResolver, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { IsloggedinService } from '../isloggedin.service';
import { UserdetailsService } from '../fetchuser/userdetails.service';
import { Subject, filter, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { MsalServiceService } from '../msal-service.service';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus, InteractionType, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { HomepageComponent } from '../homepage/homepage.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  
  showDetails: boolean = false;

  toggleDropdown(): void {
    this.showDetails = !this.showDetails;
  }



  showDropdown: boolean = false;

  getProfilePhotoUrl(photoBlob: Blob): string {
    if (photoBlob) {
      return URL.createObjectURL(photoBlob);
    }
    return '';
  }

  loginDisplay = false;
  profilePhotoBlob!: Blob;

  isIframe = true;

  private readonly _destroying$ = new Subject<void>();
  @ViewChild('childTemplate', { read: ViewContainerRef }) childTemplate!: ViewContainerRef;

  constructor( private sanitizer: DomSanitizer,private asd:UserdetailsService,private router: Router,private islogd:IsloggedinService,private registeruser:UserdetailsService,private authService: MsalService, private broadcastService: MsalBroadcastService,@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,private  msalService: MsalServiceService)
  {

    
  }

  ngOnInit(): void {

    
  //   this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  // else{
  //   console.log("i really need this incivisiblity");
  // }
 
  this.checkfunctionality();
    this.broadcastService.msalSubject$
    .pipe(
      filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
    )
    .subscribe((result: EventMessage) => {
      console.log(result);
    });


    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.setLoginDisplay();
      this.saveProfile();
      this.checkfunctionality();
     
    
    })
    
   


  }

  
  role:string="employee";

  photoloaded:boolean=false;

  checkfunctionality(){
    this.getphoto();
    this.loginDisplay = this.islogd.isLoggedIn();
    console.log("i am invincible");
    // this.fetchimage();
    const key = 'msal.account.keys';
    const storedData = localStorage.getItem(key);

    
    if(storedData){
      // Extracting the data between the square brackets
  const startIndex = storedData.indexOf('["') + 2; // Adding 2 to skip the opening square bracket and quote
  const endIndex = storedData.indexOf('"', startIndex); // Finding the index of the closing quote
  const dataWithoutBrackets = storedData.substring(startIndex, endIndex); // Extracting the data between the quotes
  const parts = dataWithoutBrackets.split('.');

  if (parts.length > 1) {
    const prefix = parts[0];
    console.log(prefix);
    this.asd.getUserRole(prefix).subscribe(
      (role) => {
        this.role = role.role;
        console.log("my roleeeeee");
        console.log("role", role);
      },
    );
  }
  }
  else{
    this.role="employee";
  }
  }
  login() {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginPopup({...this.msalGuardConfig.authRequest} as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
        } else {
          this.authService.loginPopup()
            .subscribe((response: AuthenticationResult) => {
              this.authService.instance.setActiveAccount(response.account);
            });
      }
    } else {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest);
      } else {
        this.authService.loginRedirect();
      }
    }
  }
  
  
  
  logout() {
    this.authService.logoutPopup().subscribe({
      next: () => {
        
        this.islogd.notifyAuthenticationStatusChange();
        this.router.navigate(['/']); 
      },
      error: (error) => {
       
        console.error('Logout failed', error);
      }
    });
  }
setLoginDisplay() {
   this.islogd.notifyAuthenticationStatusChange();
  this.loginDisplay = this.islogd.isLoggedIn();
  console.log(this.loginDisplay);
}

ngOnDestroy(): void {
  this._destroying$.next(undefined);
  this._destroying$.complete();
}
 profile!: Profilee;
 vab!: sad; 

 saveProfile() {
 
  this.registeruser.getuser().subscribe((data) => {
    console.log(data);
    this.profile = data;
    

    this.vab = {
      givenName: this.profile.givenName,
      surname: this.profile.surname,
      userPrincipalName: this.profile.userPrincipalName,
      id: this.profile.id,
      jobTitle:this.profile.jobTitle
      
    };
    this.photoloaded=true;
    
    console.log(this.vab);

    
    this.registeruser.insertProfile(this.vab).subscribe({
      next: (v) => {console.log(v);
       
      },
      error: (e) => console.error(e)
    });
  });
}


profilePhotoUrl!: SafeUrl;

getphoto() {
  console.log("I entered inside fetchimage");
  this.asd.getuserProfilePhoto().subscribe({
    next: (photoBlob: Blob) => {
      this.profilePhotoBlob = photoBlob;
      console.log('Profile photo Blob:', this.profilePhotoBlob);
      this.convertBlobToBase64();
      this.photoloaded=true;
    },
    error: (e) => {
      console.error('Error fetching profile photo:', e);
    },
    complete: () => {
      console.log('Fetch image request completed.');
    }
  });
 
}

convertBlobToBase64() {
  const reader = new FileReader();
  reader.readAsDataURL(this.profilePhotoBlob);
  reader.onloadend = () => {
    this.profilePhotoUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
  };
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

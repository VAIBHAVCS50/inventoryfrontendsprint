import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserdetailsService } from '../fetchuser/userdetails.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile!: Profilee;
  profilePhotoBlob!: Blob;
  profilePhotoUrl!: SafeUrl;
  showEquipmentsInPossession: boolean = false;

  constructor(
    private http: HttpClient,
    private getservice: UserdetailsService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getphoto();
  }

  getProfile() {
    this.getservice.getuser()
      .subscribe(profile => {
        console.log("hiiiiiiiiiiii");
        this.profile = profile;
        console.log(this.profile);
      });
  }
  onTabChange(event: any) {
    if (event.index === 1) {
      // Assuming 1 is the index of the "Equipments in Possession" tab
      this.router.navigate(['profile/requesthistory', this.profile.id, 'issued-gatepass'], { queryParams: { from: 'submit-equipment' } });
      this.showEquipmentsInPossession = false;
    } else {
      this.showEquipmentsInPossession = true;
      
        console.log(event.index);
  
    }
    
  }

  getphoto() {
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

  convertBlobToBase64() {
    const reader = new FileReader();
    reader.readAsDataURL(this.profilePhotoBlob);
    reader.onloadend = () => {
      this.profilePhotoUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
  }
}

export interface Profilee {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string,
  jobTitle?: string
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserdetailsService } from '../fetchuser/userdetails.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile!: Profilee;
  profilePhotoBlob!: Blob;
  profilePhotoUrl!: SafeUrl;

  constructor(
    private http: HttpClient,
    private getservice: UserdetailsService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getProfile();
    this.getphoto();
  }

  getProfile() {
    this.getservice.getuser()
      .subscribe(profile => {
        this.profile = profile;
        console.log(this.profile);
      });
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

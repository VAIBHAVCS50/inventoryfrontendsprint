import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserdetailsService } from './fetchuser/userdetails.service';

import{Profilee} from './profile/profile.component';
@Injectable({
  providedIn: 'root'
})
export class CommonprofileService {
  private userProfileSubject: BehaviorSubject<Profilee | null> = new BehaviorSubject<Profilee | null>(null);
  userProfile$: Observable<Profilee | null> = this.userProfileSubject.asObservable();
  private userProfileCache: Profilee | null = null;

  constructor(private apiService: UserdetailsService) {}
   

  fetchUserProfile(): void {
    if (this.userProfileCache) {
      // i am returning cached user profile if available
      this.userProfileSubject.next(this.userProfileCache);
    } else {
      // Fetching user profile from API
      this.apiService.getuser()
        .subscribe(profile => {
          this.userProfileCache = profile;
          this.userProfileSubject.next(profile);
        });
    }
  }

  getUserProfile(): Observable<Profilee | null> {
    return this.userProfile$;
  }

}

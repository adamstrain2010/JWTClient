import { Injectable } from '@angular/core';

import { UserInfo } from './user-info';
import { UserProfileDTO, UserProfile } from './user-profile';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  loggedIn: boolean = false;
  currentUserId: number = null;
  currentUserProfile: UserProfileDTO = {
    userProfileId: null,
    userInfoId: null,
    surname: null,
    forenames: null,
    title: null,
    gender: null,
    availabilityToWork: null,
    timeframeToWork: null
  }
  constructor() { }


}

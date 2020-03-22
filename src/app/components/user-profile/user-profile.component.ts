import { Component, OnInit, ɵConsole } from '@angular/core';

import { UserProfile, UserProfileDTO, MapUserProfileToUserProfileDTO, MapUserProfileDTOToUserProfile } from './../../user-profile';

import { UserProfileService } from './../../user-profile.service';
import { StateService } from './../../state.service';
import { FormField } from './../../form-field';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  modelValid:boolean = false;
  modelEdited:boolean = false;

  userProfile: UserProfile = {
    surname: {value: null, required: true},
    forenames: {value: null, required: true},
    title: {value: null, required: false},
    gender: {value: null, required: false},
    availabilityToWork: {value: null, required: true},
    timeframeToWork: {value: null, required: false}
  }

  constructor(private userProfileService: UserProfileService, private state: StateService) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  testModel = () => {
    console.log(this.userProfile);
  }

  checkRequiredFields = () => {
    if(this.userProfile.availabilityToWork.value == "1" || this.userProfile.availabilityToWork.value == "2"){
      this.userProfile.timeframeToWork.required = true;
    }
    else{
      this.userProfile.timeframeToWork.required = false;
    }
    this.checkModelValid();
  }

  checkModelValid = () => {
    let innerModelValid: boolean = true;  
    Object.keys(this.userProfile).forEach(key => {
      console.log(typeof(this.userProfile[key]));
      // if(typeof(this.userProfile[key] == "FormField")){
      //   console.log("match");
      // }
      // if(this.userProfile[key].required){
      //   if (this.userProfile[key].value == null || this.userProfile[key].value.trim() == ''){
      //     innerModelValid = false;
      //     console.log(`${key} is a false`);
      //   }
      // }
    })
    this.modelValid = innerModelValid;
  }

  saveProfile = () => {
    let outProfile = MapUserProfileToUserProfileDTO(this.userProfile);
    outProfile.userInfoId = this.state.currentUserId;
    this.userProfileService.addUserProfile(outProfile).subscribe(data => {
      console.log(data);
    })
  }

  getUserProfile = () => {
    console.log("getting user profile");
    this.userProfileService.getUserProfile(this.state.currentUserId).subscribe(data => {
      console.log(data);
      this.userProfile = MapUserProfileDTOToUserProfile(data);
      console.log(this.userProfile);
    })
  }

}

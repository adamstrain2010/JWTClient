import { FormField } from './form-field';

export interface UserProfile {
    userProfileId?: number;
    surname: FormField<string>;
    forenames: FormField<string>;
    title: FormField<string>;
    gender: FormField<string>;
    availabilityToWork: FormField<string>;
    timeframeToWork: FormField<string>;
}

export interface UserProfileDTO{
    userProfileId?: number;
    userInfoId?: number;
    surname: string;
    forenames: string;
    title: string;
    gender: string;
    availabilityToWork: number;
    timeframeToWork: string;
}

export function MapUserProfileToUserProfileDTO(userProfile: UserProfile): UserProfileDTO{
    let profile: UserProfileDTO = {
        userProfileId: userProfile.userProfileId,
        surname: userProfile.surname.value,
        forenames: userProfile.forenames.value,
        title: userProfile.title.value,
        gender: userProfile.gender.value,
        availabilityToWork: parseInt(userProfile.availabilityToWork.value),
        timeframeToWork: new Date(userProfile.timeframeToWork.value).toISOString().split("T")[0]
    }

    return profile;
}

export function MapUserProfileDTOToUserProfile(userProfile: UserProfileDTO): UserProfile{
    let profile: UserProfile = {
        userProfileId: userProfile.userProfileId,
        surname: {value: userProfile.surname, required: true},
        forenames: {value: userProfile.forenames, required: true},
        title: {value: userProfile.title, required: false},
        gender: {value: userProfile.gender, required: false},
        availabilityToWork: {value: userProfile.availabilityToWork.toString(), required: true},
        timeframeToWork: {value: new Date(userProfile.timeframeToWork).toISOString().split("T")[0], required: userProfile.availabilityToWork == 1 || userProfile.availabilityToWork == 2}
    }

    return profile;
}
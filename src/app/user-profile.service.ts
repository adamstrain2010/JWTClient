import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserProfileDTO } from './user-profile';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  baseApiUri:string = 'https://localhost:44382/api' 

  constructor(private http: HttpClient) { }

  getUserProfile = (userInfoId: number) => {
    return this.http.get<UserProfileDTO>(`${this.baseApiUri}/GetUserProfile/${userInfoId}`)
    .pipe(
      tap(res => {
        console.log(res);
      })
    )
  }

  addUserProfile = (profile: UserProfileDTO) : Observable<any> => {
    console.log(profile);
    return this.http.post<any>(`${this.baseApiUri}/UpsertUserProfile`, profile)
    .pipe(
      tap(res => {
      console.log(res);
        })
    )
  }

  // register = (userInfo: UserInfo): Observable<UserInfo> => {
  //   return this.http.post<any>("https://localhost:44382/api/Register", userInfo)
  //   .pipe(
  //     tap(res => {
  //       console.log(res);
  //       console.log(userInfo);
  //       console.log(localStorage);
  //      // this.login(userInfo.email, userInfo.password);
  //     })
  //   )
  // }
}

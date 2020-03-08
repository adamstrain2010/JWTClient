import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt';

import { UserInfo } from './user-info';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  public get loggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router) { }

  login = (email: string, password: string) => {
    try{
        return this.http.post<any>("https://localhost:44382/api/GetToken",{"Email": email,"Password": password})
        .pipe(
          tap(res => {
            console.log(res);
            if(res.data.statusCode == 200){
              localStorage.setItem('access_token', res.data.value);
            }
          })
      )
    }
    catch(e){
      console.log(e);
    } 
  }

  register = (userInfo: UserInfo): Observable<UserInfo> => {
    return this.http.post<any>("https://localhost:44382/api/Register", userInfo)
    .pipe(
      tap(res => {
        console.log(res);
        console.log(userInfo);
        console.log(localStorage);
       // this.login(userInfo.email, userInfo.password);
      })
    )
  }

  logout = () => {
    console.log(localStorage);
    localStorage.removeItem('access_token');
    console.log(localStorage);
  }

  public isAuthenticated = ():boolean =>  {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  } 
}

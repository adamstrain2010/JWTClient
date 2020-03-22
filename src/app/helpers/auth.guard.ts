import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { JwtService } from './../jwt.service';
import { StateService } from './../state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(public auth: JwtService, public router: Router, private state: StateService){}
  
  canActivate(): boolean {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['login']);
      this.state.loggedIn = false;
      return false;
    }
    this.state.loggedIn = true;
    return true;
  }
  
}

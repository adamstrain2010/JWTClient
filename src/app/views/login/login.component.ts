import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/user-info';
import { JwtService } from './../../jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormShown: boolean = true;
  registerFormShown: boolean = false;

  constructor(private jwt: JwtService, private router: Router) { }

  ngOnInit(): void {
  }

  showRegister = (registerShown: boolean) => {
    this.loginFormShown = false; 
    this.registerFormShown = true;
  }

  showLogin = (loginShown: boolean) => {
    this.registerFormShown = false;
    this.loginFormShown = true;
  }
  
  register = (newUserInfo: UserInfo) => {
    console.log("register");
    this.jwt.register(newUserInfo).subscribe((data) => {
      console.log(data);
      this.jwt.login(data.email, data.password).subscribe((data2) => {
        console.log("here 1");
        this.router.navigateByUrl('/dashboard');
        console.log("here 2");
      })
    })
  }

  showError = (errorMessage: string) => {
    console.log(errorMessage);
    alert(errorMessage);
  }

  

  // login = (userInfo: UserInfo) => {
  //   console.log("testing component");
  //   this.jwt.login(userInfo.email, userInfo.password).subscribe((data) => {
  //     console.log("here");
  //     this.router.navigateByUrl('/dashboard');
  //     console.log("and here");
  //   })
  // }
  

}

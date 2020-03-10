import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { UserInfo } from 'src/app/user-info';
import { JwtService } from './../../jwt.service';
import { Router } from '@angular/router';
import { AlertTypes } from './../../enums/alert-types.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('alert', {static: true}) alert: ElementRef;
  @Input() messageText: string = null;

  loginFormShown: boolean = true;
  registerFormShown: boolean = false;
  forgotPasswordFormShown: boolean = false;
  messageWindowShown: boolean = false;

  alertText: string = null;
  

  constructor(private jwt: JwtService, private router: Router) { }

  ngOnInit(): void {
  }

  showRegister = (registerShown: boolean) => {
    this.closeAlert();
    this.loginFormShown = false; 
    this.forgotPasswordFormShown = false;
    this.registerFormShown = true;
  }

  showLogin = (loginShown: boolean) => {
    this.closeAlert();
    this.registerFormShown = false;
    this.forgotPasswordFormShown = false;
    this.loginFormShown = true;
  }

  showForgotPassword = (forgotPasswordShown: boolean) => {
    this.closeAlert();
    this.registerFormShown = false;
    this.loginFormShown = false;
    this.forgotPasswordFormShown = true;
  }
  
  showMessage = (message: string) => {
    console.log(message);
    this.messageText = message;
    this.registerFormShown = false;
    this.loginFormShown = false;
    this.forgotPasswordFormShown = false;
    this.messageWindowShown = true;
  }

  register = (newUserInfo: UserInfo) => {
    this.closeAlert();
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

  closeAlert = () => {
    this.alert.nativeElement.classList.remove('show');
  }

  showAlert = (message: string) => {
    this.closeAlert();
    this.alertText = message;
    this.alert.nativeElement.classList.add('show');
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

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { JwtService } from'./../../../jwt.service';
import { StateService } from './../../../state.service';

import { UserInfo } from './../../../user-info';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() showRegister = new EventEmitter<boolean>();
  @Output() showPasswordForgot = new EventEmitter<boolean>();
  @Output() bubbleError = new EventEmitter<string>();

  loginCreds = {
    email: 'InventoryAdmin@abc.com',
    password: '$admin@2017'
  }

  creds: UserInfo = {
    firstName: 'Adam',
    lastName: 'Strain',
    userName: 'astr',
    email: null,
    password: null,
    createdDate: new Date()
  }

  constructor(private jwt: JwtService, private router: Router, private state: StateService) { }

  ngOnInit(): void {
  }

  showRegisterForm = () => {
    this.showRegister.emit(true);
  }

  register = () => {
    console.log("register");
    this.jwt.register(this.creds).subscribe((data) => {
      console.log(data);
      this.jwt.login(data.email, data.password).subscribe((data2) => {
        console.log("here 1");
        this.router.navigateByUrl('/dashboard');
        console.log("here 2");
      })
    })
  }

  

  login = () => {
    console.log("testing component");
    this.jwt.login(this.creds.email, this.creds.password).subscribe((data: any) => {
      if(data.data.statusCode == 200){
        this.router.navigateByUrl('/dashboard');
        this.state.loggedIn = true;
      }
      else{
        this.bubbleError.emit(data.data.value);
      }  
    })
  }

  showForgotPasswordForm = () => {
    this.showPasswordForgot.emit(true);
  }

  logout = () => {
    this.jwt.logout();
    this.router.navigateByUrl('/login');
  }

}

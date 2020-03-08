import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserInfo } from './../../user-info';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  newUserInfo: UserInfo = {
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    userName: null,
    createdDate: null
  }

  @Output() showLogin = new EventEmitter<boolean>();
  @Output() registerUser = new EventEmitter<UserInfo>();

  constructor() { }

  ngOnInit(): void {
  }

  registerNewUser = () => {
    this.newUserInfo.createdDate = new Date();
    this.registerUser.emit(this.newUserInfo);
  }

  showLoginForm = () => {
    this.showLogin.emit(true);
  }

}

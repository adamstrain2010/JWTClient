import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JwtService } from'./../../jwt.service';
import { UserInfo } from './../../user-info';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() showRegister = new EventEmitter<boolean>();

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

  constructor(private jwt: JwtService, private router: Router) { }

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
    this.jwt.login(this.creds.email, this.creds.password).subscribe((data) => {
      console.log("here");
      this.router.navigateByUrl('/dashboard');
      console.log("and here");
    })
  }

  logout = () => {
    this.jwt.logout();
    this.router.navigateByUrl('/login');
  }

}

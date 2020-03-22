import { Component, OnInit } from '@angular/core';

import { JwtService } from './jwt.service';
import { StateService } from './state.service';

import { UserInfo } from './user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  loginCreds = {
    email: 'InventoryAdmin@abc.com',
    password: '$admin@2017'
  }

  creds: UserInfo = {
    firstName: 'Adam',
    lastName: 'Strain',
    userName: 'astr',
    email: 'adamstrain2010@gmail.com',
    password: 'Guevara1174!',
    createdDate: new Date()
  }

  constructor(private jwt: JwtService, public state: StateService){}

  ngOnInit(){
    // this.jwt.login(this.loginCreds.email, this.loginCreds.password).subscribe((data:string) => {
    //   console.log(data);
    // })
    // this.logout();
    // this.register();
  }

  
}

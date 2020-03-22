import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StateService } from './../../state.service';
import { JwtService } from './../../jwt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public state: StateService, private jwt: JwtService, public router: Router) { }

  ngOnInit(): void {
  }

  logout = () => {
    this.jwt.logout();
    this.router.navigateByUrl('/login');
  }



}

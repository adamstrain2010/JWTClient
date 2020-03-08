import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private jwt: JwtService, private router: Router) { }

  ngOnInit(): void {
  }

  logout = () => {
    this.jwt.logout();
    this.router.navigateByUrl('/login');
  }
}

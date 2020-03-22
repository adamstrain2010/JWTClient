import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JwtService } from 'src/app/jwt.service';
import { ContractService } from 'src/app/contract.service';

import { Contract } from 'src/app/contract';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  selectedContract: Contract = null;

  constructor(private jwt: JwtService, private router: Router, private contractSvc: ContractService) { }

  ngOnInit(): void {
  }

  logout = () => {
    this.jwt.logout();
    this.router.navigateByUrl('/login');
  }

  setContract = (contract: Contract) => {
    this.selectedContract = contract;
  }

  
}

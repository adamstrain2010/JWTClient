import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ContractService } from './../../../contract.service';

import { Contract } from './../../../contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  @Output() selectedContract = new EventEmitter<Contract>();

  tableHeaders: string[] = [];
  contractList: Contract[] = [];

  constructor(private contractSvc: ContractService) { }

  ngOnInit(): void {
    this.getContractList(true, false);
  }

  getContractList = (getActiveContracts: boolean, getInactiveContracts: boolean) => {
    this.contractSvc.getContracts(getActiveContracts, getInactiveContracts).subscribe((data: Contract[]) => {
      console.log(data);
      this.contractList = data;
    })
  }

  setSelectedContract = (contract: Contract) => {
    this.selectedContract.emit(contract);
  }
}

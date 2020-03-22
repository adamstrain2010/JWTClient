import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Contract } from './../../contract';

@Component({
  selector: 'app-selected-component-pane',
  templateUrl: './selected-component-pane.component.html',
  styleUrls: ['./selected-component-pane.component.scss']
})
export class SelectedComponentPaneComponent implements OnInit {

  @Input() selectedContract: Contract = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToContractSite = (thisContractSiteUrl: string) => {
    window.open(thisContractSiteUrl);
  }

}

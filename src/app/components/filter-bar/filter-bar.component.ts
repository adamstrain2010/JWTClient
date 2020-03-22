import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {

  @ViewChild('filterContainer') filterBox: ElementRef;

  filtersOpen: boolean =  false;

  filters:any = {
    minRate: null,
    maxRate: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleBox = () => {
    this.filtersOpen = !this.filtersOpen;
    //this.filterBox.toggle();
  }

  applyFilters = () => {
    //APPLY FILTER LOGIC HERE
    this.toggleBox();
  }

  resetFilters = () => {
    Object.keys(this.filters).forEach(f => {
      this.filters[f] = null;
    })
  }
}

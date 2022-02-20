import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  tileItems = [
    // {
    //   path: 'readings',
    //   icon: 'bx bx-spreadsheet',
    //   title: 'Meter Reading',
    // },
    {
      path: 'customer_Balance',
      icon: 'bx bx-spreadsheet',
      title: 'Customer Balance',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
  domier(string: string, index) {
    return (document.querySelectorAll('div.overlay')[index].innerHTML = string);
  }
}

interface Tile {
  title: string;
  routerLink: string;
  icon: string;
}
type Tiles = Tile[];

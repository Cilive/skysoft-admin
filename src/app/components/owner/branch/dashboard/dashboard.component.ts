import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { htmlTextExtractor } from 'src/app/app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tileList: Tiles = [
    {
      icon: 'bx bxs-right-down-arrow-circle',
      routerLink: '/owner/branch/dashboard/bank-account-summery',
      title: 'Bank A/C summery',
      subtitle: null,
    },
    {
      icon: 'bx bxs-left-top-arrow-circle',
      routerLink: '/owner/branch/dashboard/cash-sales-summery',
      title: 'Cash Sales Summery',
      subtitle: null,
    },
    {
      icon: 'bx bx-wallet-alt',
      routerLink: '/owner/branch/dashboard/expence',
      title: 'Expence',
      subtitle: null,
    },
    {
      icon: 'bx bx-window-close',
      routerLink: '/owner/branch/dashboard/online-sales',
      title: 'Online Sales',
      subtitle: null,
    },
    {
      icon: 'bx bx-coin',
      routerLink: '/owner/branch/dashboard/stock-manegment',
      title: 'Stock Manegment ',
      subtitle: null,
    },
    {
      icon: 'bx bx-coin',
      routerLink: '/owner/branch/dashboard/total-purchase',
      title: 'Total Purchase',
      subtitle: null,
    },
  ];
  constructor(private router: Router) {}
  extractor = htmlTextExtractor;
  ngOnInit(): void {}
  domier(string: string, index) {
    return (document.querySelectorAll('div.overlay')[index].innerHTML = string);
  }
}
interface Tile {
  title: string;
  routerLink: string;
  icon: string;
  subtitle: number;
}
type Tiles = Tile[];

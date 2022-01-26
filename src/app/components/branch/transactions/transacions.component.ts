import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transacions',
  templateUrl: './transacions.component.html',
  styleUrls: ['./transacions.component.scss'],
})
export class TransacionsComponent implements OnInit {
  tileList: Tiles = [
    {
      icon: 'bx bxs-right-down-arrow-circle',
      routerLink: '/owner/payments_In',
      title: 'Payments In',
    },
    {
      icon: 'bx bxs-left-top-arrow-circle',
      routerLink: '/owner/payments_Out',
      title: 'Payments Out',
    },
    {
      icon: 'bx bx-wallet-alt',
      routerLink: '/owner/expenses',
      title: 'Expenses',
    },
    {
      icon: 'bx bx-window-close',
      routerLink: '/owner/close_Account',
      title: 'Close Account',
    },
    {
      icon: 'bx bx-coin',
      routerLink: '/owner/deposits',
      title: 'Deposit ',
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

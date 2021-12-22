import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  tileList: Tiles = [
    {
      icon: 'bx bxs-group',
      routerLink: '/owner/employees',
      title: 'Employees',
    },
    {
      icon: 'bx bxs-user-voice',
      routerLink: '/owner/supplier_Profile',
      title: 'Suppliers',
    },
    {
      icon: 'bx bxs-factory',
      routerLink: '/owner/customer_Profile',
      title: 'Customers',
    },
    {
      icon: 'bx bx-shield-quarter',
      routerLink: '/owner/company_Owners',
      title: 'Owners',
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

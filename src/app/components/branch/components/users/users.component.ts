import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  tileList: Tiles = [
    {
      icon: 'bx bxs-branch',
      routerLink: '/branch/branch_manager',
      title: 'Branch Managers',
    },
    {
      icon: 'bx bxs-group',
      routerLink: '/branch/employees',
      title: 'Employees',
    },
    {
      icon: 'bx bxs-user-voice',
      routerLink: '/branch/supplier_Profile',
      title: 'Suppliers',
    },
    {
      icon: 'bx bxs-factory',
      routerLink: '/branch/customer_Profile',
      title: 'Customers',
    },
    {
      icon: 'bx bx-shield-quarter',
      routerLink: '/branch/company_Owners',
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

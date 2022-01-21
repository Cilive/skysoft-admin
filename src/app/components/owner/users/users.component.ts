import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/model/shared';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  tileList: Tiles = [
    {
      icon: 'bx bxs-branch',
      routerLink: '/owner/branch_manager',
      title: 'Branch Managers',
    },
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
  constructor() {
    const role = new StoreService().retrieve('role');
    if (Role.maneger === Number(role)) {
      this.tileList = [
        {
          icon: 'bx bxs-group',
          routerLink: '/branch/branch-employee',
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
      ];
    }
  }

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

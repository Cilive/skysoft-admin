import { Location } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Role } from 'src/app/model/shared';
import { AlertService } from 'src/app/services/alert/alert.service';
import { validateForm } from 'src/app/services/general/general.service';

import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  routes: NavLinks;
  title;
  username: string;
  isTopLevel: boolean = false;
  cmd = console;
  isNotificationsOn = false;
  direction = 'ltr';
  enset = true;
  constructor(
    private router: Router,
    private location: Location,
    private alert: AlertService,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');

    const capitalize = function (str1) {
      return str1.charAt(0).toUpperCase() + str1.slice(1);
    };

    //  this.title= capitalize()

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.title = capitalize(e.url.split('/').pop()).replace(
          /[^a-zA-Z ]/g,
          ' '
        );
        document.title = capitalize(e.url.split('/').pop()).replace(
          /[^a-zA-Z ]/g,
          ' '
        );
      }
    });

    this.generateRoutes();
  }
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.username = new StoreService().retrieve('name');

    let sidebar = document.querySelector('.sidebar');
    let closeBtn = document.querySelector('#btn');

    closeBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      menuBtnChange(); //calling the function(optional)
    });
    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
      if (sidebar.classList.contains('open')) {
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); //replacing the iocns class
      } else {
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); //replacing the iocns class
      }
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  back() {
    this.location.back();
  }
  /**
   * Function to generate Routes
   */
  private generateRoutes(): void {
    const role = parseInt(new StoreService().retrieve('role'));
    console.log(typeof role);

    switch (true) {
      case Role.admin === role:
        this.routes = [
          {
            path: '/admin/company_Profile',
            icon: 'bx bxs-business',
            title: 'Company Profile',
          },
        ];
        break;
      case Role.owner === role:
        this.routes = [
          {
            icon: 'bx bxs-business',
            path: '/owner/cashmaster',
            title: 'cashmaster',
          },
          {
            icon: 'bx bxs-business',
            path: '/owner/addbranch',
            title: 'addbranch',
          },
          {
            icon: 'bx bxs-business',
            path: '/owner/dashboard',
            title: 'dashboard',
          },
          {
            icon: 'bx bxs-user-account',
            path: '/owner/users',
            title: 'Users',
          },

          {
            icon: 'bx bxs-gas-pump',
            path: '/owner/fuel',
            title: 'Fuel Management',
          },
          {
            icon: 'bx bxs-spreadsheet',
            path: '/owner/invoices',
            title: 'Invoices',
          },
          {
            icon: 'bx bxs-bank',
            path: '/owner/bank_Accounts',
            title: 'Bank Account Master',
          },

          {
            icon: 'bx bxs-package',
            path: '/owner/dispensers',
            title: 'Dispensers',
          },
          {
            icon: 'bx bx-transfer',
            path: '/owner/transactions',
            title: 'Transactions',
          },
          {
            icon: 'bx bxs-report',
            path: '/owner/reports',
            title: 'Reports',
          },
        ];
        break;
      case Role.maneger === role:
        this.routes = [
          {
            path: '/branch/dashboard',
            icon: 'bx bxs-business',
            title: 'Dash Board',
          },

          {
            icon: 'bx bxs-user-account',
            path: '/branch/users',
            title: 'Users',
          },

          {
            icon: 'bx bxs-gas-pump',
            path: '/branch/fuel',
            title: 'Fuel Management',
          },
          {
            icon: 'bx bxs-spreadsheet',
            path: '/branch/invoices',
            title: 'Invoices',
          },
          {
            icon: 'bx bxs-bank',
            path: '/branch/bank_Accounts',
            title: 'Bank Account Master',
          },

          {
            icon: 'bx bxs-package',
            path: '/branch/dispensers',
            title: 'Dispensers',
          },
          {
            icon: 'bx bx-transfer',
            path: '/branch/transactions',
            title: 'Transactions',
          },
          {
            icon: 'bx bxs-report',
            path: '/branch/reports',
            title: 'Reports',
          },
        ];
        break;

      default:
        this.router.navigate(['/login']);
    }
  }
  onCLickLanguage() {
    if (this.enset) {
      this.direction = 'ltr';
      this.translate.setDefaultLang('en');
    } else {
      this.direction = 'rtl';
      this.translate.setDefaultLang('ar');
    }
  }
}

interface NavLink {
  path: string;
  icon: string;
  title: string;
}

type NavLinks = NavLink[];

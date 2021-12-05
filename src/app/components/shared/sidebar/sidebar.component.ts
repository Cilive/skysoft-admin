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
  constructor(
    private router: Router,
    private location: Location,
    private alert: AlertService
  ) {
    const capitalize = function (str1) {
      return str1.charAt(0).toUpperCase() + str1.slice(1);
    };
    //  this.title= capitalize()

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.title = capitalize(e.url.split('/').pop());
        document.title = capitalize(e.url.split('/').pop());
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

  private generateRoutes() {
    const role = parseInt(new StoreService().retrieve('role'));
    console.log(typeof role);

    switch (true) {
      case Role.admin === role:
        this.routes = [];
        break;
      case Role.owner === role:
        this.routes = [];
        break;

      default:
        this.router.navigate(['/login']);
    }
  }
}

interface NavLink {
  path: string;
  icon: string;
  title: string;
}

type NavLinks = NavLink[];

import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Role } from 'src/app/model/shared';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';
import { StoreService } from 'src/app/services/store/store.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit, AfterViewInit {
  routes: NavLinks;
  username: string;
  title;
  tileItems;

  isTopLevel: boolean = false;
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
    console.log('constructor working ');

    const capitalize = function (str1) {
      return str1.charAt(0).toUpperCase() + str1.slice(1);
    };

    //  this.title= capitalize()

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.tileItems = capitalize(e.url.split('/').pop()).replace(
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
    console.log('ng on init working', this.username);
  }

  /**
   * Function to generate Routes
   */
  private generateRoutes(): void {
    const role = parseInt(new StoreService().retrieve('role'));
    switch (true) {
      case Role.owner === role:
        this.routes = [
          {
            path: 'readings',
            icon: 'bx bx-spreadsheet',
            title: 'Meter Reading',
          },
          {
            path: 'customer_Balance',
            icon: 'bx bx-spreadsheet',
            title: 'Customer Balance',
          },
          {
            path: 'customer_Details',
            icon: 'bx bx-spreadsheet',
            title: 'Customer Details',
          },
          {
            path: 'deposit_Amount',
            icon: 'bx bx-spreadsheet',
            title: 'Deposit Amount',
          },
          {
            path: 'expenses_Details',
            icon: 'bx bx-spreadsheet',
            title: 'Expenses Details',
          },
          {
            path: 'income_and_Expenditure',
            icon: 'bx bx-spreadsheet',
            title: 'Income and Expenditure',
          },

          {
            path: 'monthly_Balancesheet',
            icon: 'bx bx-spreadsheet',
            title: 'Monthly Balancesheet',
          },
          {
            path: 'payment_Details',
            icon: 'bx bx-spreadsheet',
            title: 'Payment Details',
          },
          {
            path: 'payment_Due',
            icon: 'bx bx-spreadsheet',
            title: 'Payment Due',
          },
          {
            path: 'payments_in_Report',
            icon: 'bx bx-spreadsheet',
            title: 'Payments-in Report',
          },
          {
            path: 'payments_out_Report',
            icon: 'bx bx-spreadsheet',
            title: 'Payments-out Report',
          },
          {
            path: 'purchase_Details',
            icon: 'bx bx-spreadsheet',
            title: 'Purchase Details',
          },

          {
            path: 'sales_Details',
            icon: 'bx bx-spreadsheet',
            title: 'Sales Details',
          },
        ];
        break;
      case Role.maneger === role:
        this.routes = [
          {
            path: 'coustomerBalanceBranch',
            icon: 'bx bx-spreadsheet',
            title: 'test',
          },
          {
            icon: 'bx bx-transfer',
            path: '/branch/customer_Balance',
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

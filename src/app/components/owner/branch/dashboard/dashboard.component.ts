import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { htmlTextExtractor } from 'src/app/app.component';
import { DashboardService } from 'src/app/services/service/dashboard/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  titleList: Tiles;
  constructor(
    private DashboardService: DashboardService,
    private router: Router
  ) {}

  extractor = htmlTextExtractor;
  ngOnInit(): void {
    this.DashboardService.branch_dashboard().subscribe((res) => {
      if (res.msg === 'Success') {
        this.titleList = [
          {
            icon: 'bx bxs-right-down-arrow-circle',
            routerLink: '/owner/branch/dashboard/bank-account-summery',
            title: 'Bank A/C Summery',
            subtitle: res.data.total_transactions.total_amt__sum,
          },
          {
            icon: 'bx bxs-left-top-arrow-circle',
            routerLink: '/owner/branch/dashboard/cash-sales-summery',
            title: 'Cash Sales Summery',
            subtitle: res.data.total_sale.total_amt__sum,
          },
          {
            icon: 'bx bx-wallet-alt',
            routerLink: '/owner/branch/dashboard/expence',
            title: 'Expence',
            subtitle: res.data.total_expense.total_amt__sum,
          },
          {
            icon: 'bx bx-window-close',
            routerLink: '/owner/branch/dashboard/online-sales',
            title: 'Online Sales',
            subtitle: res.data.online_sales.total_amt__sum,
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
            subtitle: res.data.total_purchase.total_amt__sum,
          },
        ];
      }
    });
  }

  domier(string: string, index) {
    return (document.querySelectorAll('div.overlay')[index].innerHTML = string);
  }
}
interface Tile {
  title: string;
  routerLink: string;
  icon: string;
  subtitle: number | string;
}
type Tiles = Tile[];

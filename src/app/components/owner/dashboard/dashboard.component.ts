import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tileList: Tiles;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.owner_dashboard().subscribe((res) => {
      if (res.msg === 'Success') {
        // this.tileList[0].subtitle = res.data.total_transactions.total_amt__sum;
        this.tileList = [
          {
            icon: 'bx bxs-right-down-arrow-circle',
            routerLink: '/owner/bank-account-summery',
            title: ' Account Summery',
            subtitle: res.data.total_transactions.total_amt__sum,
          },
          {
            icon: 'bx bxs-left-top-arrow-circle',
            routerLink: '/owner/cash-sales-summery',
            title: 'Sales Summery',
            subtitle: res.data.total_sale.total_amt__sum,
          },
          {
            icon: 'bx bx-wallet-alt',
            routerLink: '/owner/expence',
            title: 'Expence',
            subtitle: res.data.total_expense.total_amt__sum,
          },
          {
            icon: 'bx bx-window-close',
            routerLink: '/owner/online-sales',
            title: 'Online Sales',
            subtitle: res.data.online_sales.total_amt__sum,
          },
          // {
          //   icon: 'bx bx-coin',
          //   routerLink: '/admin/stock-management',
          //   title: 'Stock Management ',
          //   subtitle: res.data.Stock.branches,
          // },
          {
            icon: 'bx bx-coin',
            routerLink: '/owner/total-purchase',
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
  subtitle: number;
}
type Tiles = Tile[];

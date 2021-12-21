import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  tileItems = [
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
  constructor() {}

  ngOnInit(): void {}
}

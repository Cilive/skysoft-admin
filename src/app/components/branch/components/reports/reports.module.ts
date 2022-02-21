// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReportsComponent } from './reports.component';
// import { RouterModule, Routes } from '@angular/router';
// import { ModalModule } from 'ngx-bootstrap/modal';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { FormsModule } from '@angular/forms';
// import { CustomerBalanceComponent } from './customer-balance/customer-balance.component';
// // import { MonthlyBlancesheetComponent } from './monthly-blancesheet/monthly-blancesheet.component';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient } from '@angular/common/http';
// import { CustomerDetailsBranchComponent } from './customer-details-branch/customer-details-branch.component';
// import { DepositAmountBranchComponent } from './deposit-amount-branch/deposit-amount-branch.component';
// import { ExpenceDetailsBranchComponent } from './expence-details-branch/expence-details-branch.component';
// // import {  CustomerDetailsBranchComponent } from './customer-details-branch/customer-details-branch.component';
// import { IncomeAndExpenceBranchComponent } from './income-and-expence-branch/income-and-expence-branch.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: ReportsComponent,
//   },
//   {
//     path: 'customer_Balance',
//     component: CustomerBalanceComponent,
//   },
// {
//   path: 'readings',
//   component: MeterReadingComponent,
// },

// {
// {
//   path: 'customer_Details_branch',
//   component: CustomerDetailsBranchComponent,
// },
// {
//   path: 'deposit_Amount',
//   component: DepositAmountComponent,
// },
// {
//   path: 'expenses_Details',
//   component: ExpensesDetailsComponent,
// },
// {
//   path: 'income_and_Expenditure',
//   component: IncomeAndExpenditureReportsComponent,
// },
// {
//   path: 'monthly_Balancesheet',
//   component: MonthlyBlancesheetComponent,
// },
// {
//   path: 'payment_Details',
//   component: PaymentDetailsComponent,
// },
// {
//   path: 'payment_Due',
//   component: PaymentDueComponent,
// },
// {
//   path: 'payments_in_Report',
//   component: PaymentsInReportComponent,
// },
// {
//   path: 'payments_out_Report',
//   component: PaymentsOutReportComponent,
// },
// {
//   path: 'purchase_Details',
//   component: PurchaseDetailsComponent,
// },
// {
//   path: 'sales_Details',
//   component: SalesDetailsComponent,
// },
// {
//   path: 'stock_Report',
//   component: StockReportComponent,
// },
// {
//   path: 'supplier_Report',
//   component: SupplierDetailsComponent,
// },
// ];

// @NgModule({
//   declarations: [
//     ReportsComponent,

//     CustomerBalanceComponent,
//     CustomerDetailsBranchComponent,
//     DepositAmountBranchComponent,
//     ExpenceDetailsBranchComponent,
//     IncomeAndExpenceBranchComponent,
//     // DepositAmountComponent,
//     CustomerDetailsBranchComponent,
//     // IncomeAndExpenditureReportsComponent,
//     // MonthlyBlancesheetComponent
//   ],
//   imports: [
//     CommonModule,
//     RouterModule.forChild(routes),
//     ModalModule.forRoot(),
//     BsDatepickerModule.forRoot(),
//     FormsModule,
//     // SharedModule,
//     TranslateModule.forChild({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient],
//       },
//     }),
//   ],
// })
// export class ReportsModule {}

// export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
//   return new TranslateHttpLoader(http);
// }

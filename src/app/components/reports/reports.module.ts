import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { RouterModule, Routes } from '@angular/router';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { PaymentsInReportComponent } from './payments-in-report/payments-in-report.component';
import { PaymentsOutReportComponent } from './payments-out-report/payments-out-report.component';
import { ExpensesDetailsComponent } from './expenses-details/expenses-details.component';
import { StockReportComponent } from './stock-report/stock-report.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { PaymentDueComponent } from './payment-due/payment-due.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CustomerBalanceComponent } from './customer-balance/customer-balance.component';
import { DepositAmountComponent } from './deposit-amount/deposit-amount.component';
import { IncomeAndExpenditureReportsComponent } from './income-and-expenditure-reports/income-and-expenditure-reports.component';
import { MonthlyBlancesheetComponent } from './monthly-blancesheet/monthly-blancesheet.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


import { SessionReportsComponent } from './session-reports/session-reports.component';

import { CustomerBalanceBranchComponent } from './customer-balance-branch/customer-balance-branch.component';
import { AccountLedgerComponent } from './account-ledger/account-ledger.component';


const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
  },
  {
    path: 'readings',
    component: MeterReadingComponent,
  },
  {
    path: 'customer_Balance',
    component: CustomerBalanceComponent,
  },
  // {
  //   path: 'customer_Details',
  //   component: CustomerDetailsComponent,
  // },
  {
    path: 'deposit_Amount',
    component: DepositAmountComponent,
  },
  {
    path: 'expenses_Details',
    component: ExpensesDetailsComponent,
  },
  {
    path: 'income_and_Expenditure',
    component: IncomeAndExpenditureReportsComponent,
  },
  {
    path: 'monthly_Balancesheet',
    component: MonthlyBlancesheetComponent,
  },
  {
    path: 'payment_Details',
    component: PaymentDetailsComponent,
  },
  {
    path: 'payment_Due',
    component: PaymentDueComponent,
  },
  {
    path: 'payments_in_Report',
    component: PaymentsInReportComponent,
  },
  {
    path: 'payments_out_Report',
    component: PaymentsOutReportComponent,
  },
  {
    path: 'purchase_Details',
    component: PurchaseDetailsComponent,
  },
  {
    path: 'sales_Details',
    component: SalesDetailsComponent,
  },
  {
    path: 'stock_Report',
    component: StockReportComponent,
  },
  {
    path: 'supplier_Report',
    component: SupplierDetailsComponent,
  },
  {
    path: 'account_Ledger',
    component: AccountLedgerComponent,
  },
  {

    path: 'session_Reports',
    component: SessionReportsComponent,
  },

  {
    path: 'coustomerBalanceBranch',
    component: CustomerBalanceBranchComponent,
  },

];

@NgModule({
  declarations: [
    ReportsComponent,
    MeterReadingComponent,
    PurchaseDetailsComponent,
    SalesDetailsComponent,
    PaymentsInReportComponent,
    PaymentsOutReportComponent,
    ExpensesDetailsComponent,
    StockReportComponent,
    SupplierDetailsComponent,
    CustomerDetailsComponent,
    PaymentDueComponent,
    PaymentDetailsComponent,
    CustomerBalanceComponent,
    DepositAmountComponent,
    IncomeAndExpenditureReportsComponent,
    MonthlyBlancesheetComponent,

    SessionReportsComponent,

    CustomerBalanceBranchComponent,
      AccountLedgerComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    // SharedModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class ReportsModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

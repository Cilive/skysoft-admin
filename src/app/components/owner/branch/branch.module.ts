import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../../shared/shared.module';
import { BranchEmployeeComponent } from './branch-employee/branch-employee.component';
import { BankAccountMasterComponent } from '../bank-account-master/bank-account-master.component';
import { CloseAccountComponent } from '../close-account/close-account.component';
import { CompanyOwnerComponent } from '../company-owner/company-owner.component';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
import { BankAccountSummeryComponent } from '../dashboard/bank-account-summery/bank-account-summery.component';
import { CashSalesSummeryComponent } from '../dashboard/cash-sales-summery/cash-sales-summery.component';
import { ExpenceComponent } from '../dashboard/expence/expence.component';
import { OnlineSalesComponent } from '../dashboard/online-sales/online-sales.component';
import { StockManagementComponent } from '../dashboard/stock-management/stock-management.component';
import { TotalPurchaseComponent } from '../dashboard/total-purchase/total-purchase.component';
import { DispenseComponent } from '../dispense/dispense.component';
import { FuelManagementComponent } from '../fuel-management/fuel-management.component';
import { InvoicesComponent } from '../invoices/invoices.component';
import { PumpEmployeeComponent } from '../pump-employee/pump-employee.component';
import { SupplierProfileComponent } from '../supplier-profile/supplier-profile.component';
import { DepositComponent } from '../transactions/deposit/deposit.component';
import { ExpensesComponent } from '../transactions/expenses/expenses.component';
import { PaymentsInComponent } from '../transactions/payments-in/payments-in.component';
import { PaymentsOutComponent } from '../transactions/payments-out/payments-out.component';
import { TransacionsComponent } from '../transactions/transacions.component';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [
  {
    path: '',
    component: BranchComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'branch-employee',
        component: BranchEmployeeComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'branch-employee',
        component: BranchEmployeeComponent,
      },
      {
        path: 'bank-account-summery',
        component: BankAccountSummeryComponent,
      },
      {
        path: 'cash-sales-summery',
        component: CashSalesSummeryComponent,
      },
      {
        path: 'expence',
        component: ExpenceComponent,
      },
      {
        path: 'online-sales',
        component: OnlineSalesComponent,
      },
      {
        path: 'stock-management',
        component: StockManagementComponent,
      },
      {
        path: 'total-purchase',
        component: TotalPurchaseComponent,
      },

      {
        path: 'supplier_Profile',
        component: SupplierProfileComponent,
      },
      {
        path: 'customer_Profile',
        component: CustomerProfileComponent,
      },

      {
        path: 'invoices',
        component: InvoicesComponent,
      },
      {
        path: 'employees',
        component: PumpEmployeeComponent,
      },
      {
        path: 'bank_Accounts',
        component: BankAccountMasterComponent,
      },
      {
        path: 'deposits',
        component: DepositComponent,
      },
      {
        path: 'transactions',
        component: TransacionsComponent,
      },
      {
        path: 'dispensers',
        component: DispenseComponent,
      },
      {
        path: 'fuel',
        component: FuelManagementComponent,
      },
      {
        path: 'reports',
        loadChildren: async () =>
          (await import('../../reports/reports.module')).ReportsModule,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'company_Owners',
        component: CompanyOwnerComponent,
      },

      {
        path: 'payments_In',
        component: PaymentsInComponent,
      },
      {
        path: 'payments_Out',
        component: PaymentsOutComponent,
      },
      {
        path: 'expenses',
        component: ExpensesComponent,
      },
      {
        path: 'close_Account',
        component: CloseAccountComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [BranchComponent, DashboardComponent, BranchEmployeeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ModalModule.forRoot(),
  ],
})
export class BranchModule {}

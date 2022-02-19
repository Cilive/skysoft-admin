import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';

import { BranchComponent } from './branch.component';
import { BankAccountMasterComponent } from './components/bank-account-master/bank-account-master.component';
import { BranchEmployeeComponent } from './components/branch-employee/branch-employee.component';
// import { BranchManagerComponent } from './components/branch-manager/branch-manager.component';
import { CloseAccountComponent } from './components/close-account/close-account.component';
import { CompanyOwnerComponent } from './components/company-owner/company-owner.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { BankAccountSummeryComponent } from './components/dashboard/bank-account-summery/bank-account-summery.component';
import { SalesSummeryComponent } from './components/dashboard/cash-sales-summery/sales-summery.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ExpenceComponent } from './components/dashboard/expence/expence.component';
import { OnlineSalesComponent } from './components/dashboard/online-sales/online-sales.component';
import { StockManegmentComponent } from './components/dashboard/stock-manegment/stock-manegment.component';
import { TotalPurchaseComponent } from './components/dashboard/total-purchase/total-purchase.component';
import { DispenseComponent } from './components/dispense/dispense.component';
import { FuelManagementComponent } from './components/fuel-management/fuel-management.component';
import { FuelRateMasterComponent } from './components/fuel-rate-master/fuel-rate-master.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { PumpEmployeeComponent } from './components/pump-employee/pump-employee.component';
import { PurchaseInvoiceComponent } from './components/purchase-invoice/purchase-invoice.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SalesInvoiceComponent } from './components/sales-invoice/sales-invoice.component';
import { SupplierProfileComponent } from './components/supplier-profile/supplier-profile.component';
import { DepositComponent } from './components/transactions/deposit/deposit.component';
import { ExpensesComponent } from './components/transactions/expenses/expenses.component';
import { PaymentsInComponent } from './components/transactions/payments-in/payments-in.component';
import { PaymentsOutComponent } from './components/transactions/payments-out/payments-out.component';
import { TransacionsComponent } from './components/transactions/transacions.component';
import { UsersComponent } from './components/users/users.component';
import { VatFuelMasterComponent } from './components/vat-fuel-master/vat-fuel-master.component';
import { CashmasterComponent } from './components/cashmaster/cashmaster.component';
import { cashmaster } from 'src/app/model/api';
import { InvoicelistingComponent } from './components/invoicelisting/invoicelisting.component';
import { FuelstocksComponent } from './fuelstocks/fuelstocks.component';

const routes: Routes = [
  {
    path: '',
    component: BranchComponent,
    children: [
      {
        path: 'fuelstocks',
        component: FuelstocksComponent,
      },
      // {
      //   path: '',
      //   redirectTo: 'fuelstock',
      //   pathMatch: 'full',
      // },
      {
        path: 'invoicelisting',
        component: InvoicelistingComponent,
      },
      {
        path: '',
        redirectTo: 'invoicelisting',
        pathMatch: 'full',
      },
      {
        path: '',
        redirectTo: 'cashmaster',
        pathMatch: 'full',
      },
      {
        path: 'cashmaster',
        component: CashmasterComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      // {
      //   path: 'branch-employee',
      //   component: BranchEmployeeComponent,
      // },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'bank-account-summery',
        component: BankAccountSummeryComponent,
      },
      {
        path: 'cash-sales-summery',
        component: SalesSummeryComponent,
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
        component: StockManegmentComponent,
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
        path: '',
        redirectTo: 'branch-employee',
        pathMatch: 'full',
      },
      {
        path: 'bank_Accounts',
        component: BankAccountMasterComponent,
      },
      {
        path: 'deposit',
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
          (await import('../reports/reports.module')).ReportsModule,
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
        path: '',
        redirectTo: 'transactions',
        pathMatch: 'full',
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
      // {
      //   path: 'branch_manager',
      //   component: BranchManagerComponent,
      // },
    ],
  },
];

@NgModule({
  declarations: [
    BranchComponent,
    DashboardComponent,
    BranchEmployeeComponent,
    SupplierProfileComponent,
    CustomerProfileComponent,
    VatFuelMasterComponent,
    SalesInvoiceComponent,
    PumpEmployeeComponent,
    BankAccountMasterComponent,
    DepositComponent,
    TransacionsComponent,
    FuelRateMasterComponent,
    FuelManagementComponent,
    ReportsComponent,
    DispenseComponent,
    UsersComponent,
    CompanyOwnerComponent,
    PurchaseInvoiceComponent,
    InvoicesComponent,
    PaymentsInComponent,
    PaymentsOutComponent,
    ExpensesComponent,
    CloseAccountComponent,
    // BranchManagerComponent,
    DashboardComponent,
    SalesSummeryComponent,
    OnlineSalesComponent,
    ExpenceComponent,
    TotalPurchaseComponent,
    BankAccountSummeryComponent,
    StockManegmentComponent,
    CashmasterComponent,
    InvoicelistingComponent,
    FuelstocksComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
})
export class BranchModule {}

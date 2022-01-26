import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';
import { BankAccountMasterComponent } from './bank-account-master/bank-account-master.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';
import { CloseAccountComponent } from './close-account/close-account.component';
import { CompanyOwnerComponent } from './company-owner/company-owner.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { BankAccountSummeryComponent } from './dashboard/bank-account-summery/bank-account-summery.component';
import { SalesSummeryComponent } from './dashboard/cash-sales-summery/sales-summery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenceComponent } from './dashboard/expence/expence.component';
import { OnlineSalesComponent } from './dashboard/online-sales/online-sales.component';
import { StockManegmentComponent } from './dashboard/stock-manegment/stock-manegment.component';
import { TotalPurchaseComponent } from './dashboard/total-purchase/total-purchase.component';
import { DispenseComponent } from './dispense/dispense.component';
import { FuelManagementComponent } from './fuel-management/fuel-management.component';
import { FuelRateMasterComponent } from './fuel-rate-master/fuel-rate-master.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PumpEmployeeComponent } from './pump-employee/pump-employee.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { DepositComponent } from './transactions/deposit/deposit.component';
import { ExpensesComponent } from './transactions/expenses/expenses.component';
import { PaymentsInComponent } from './transactions/payments-in/payments-in.component';
import { PaymentsOutComponent } from './transactions/payments-out/payments-out.component';
import { TransacionsComponent } from './transactions/transacions.component';
import { UsersComponent } from './users/users.component';
import { VatFuelMasterComponent } from './vat-fuel-master/vat-fuel-master.component';
import { BranchEmployeeComponent } from './branch-employee/branch-employee.component';
import { BranchComponent } from './branch.component';

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
        redirectTo: 'branch-employee',
        pathMatch: 'full',
      },
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
      {
        path: 'branch_manager',
        component: BranchManagerComponent,
      },
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
    BranchManagerComponent,
    DashboardComponent,
    SalesSummeryComponent,
    OnlineSalesComponent,
    ExpenceComponent,
    TotalPurchaseComponent,
    BankAccountSummeryComponent,
    StockManegmentComponent,
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

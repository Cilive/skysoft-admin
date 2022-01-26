import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './owner.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { VatFuelMasterComponent } from './vat-fuel-master/vat-fuel-master.component';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';
import { PumpEmployeeComponent } from './pump-employee/pump-employee.component';
import { BankAccountMasterComponent } from './bank-account-master/bank-account-master.component';
import { DepositComponent } from './transactions/deposit/deposit.component';
import { TransacionsComponent } from './transactions/transacions.component';
import { FuelRateMasterComponent } from './fuel-rate-master/fuel-rate-master.component';
import { FuelManagementComponent } from './fuel-management/fuel-management.component';
import { ReportsComponent } from './reports/reports.component';
import { DispenseComponent } from './dispense/dispense.component';
import { UsersComponent } from './users/users.component';
import { CompanyOwnerComponent } from './company-owner/company-owner.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { PaymentsInComponent } from './transactions/payments-in/payments-in.component';
import { PaymentsOutComponent } from './transactions/payments-out/payments-out.component';
import { ExpensesComponent } from './transactions/expenses/expenses.component';
import { CloseAccountComponent } from './close-account/close-account.component';
import { BranchManagerComponent } from './branch-manager/branch-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CashSalesSummeryComponent } from './dashboard/cash-sales-summery/cash-sales-summery.component';
import { OnlineSalesComponent } from './dashboard/online-sales/online-sales.component';
import { ExpenceComponent } from './dashboard/expence/expence.component';
import { TotalPurchaseComponent } from './dashboard/total-purchase/total-purchase.component';
import { BankAccountSummeryComponent } from './dashboard/bank-account-summery/bank-account-summery.component';
import { StockManagementComponent } from './dashboard/stock-management/stock-management.component';
import { BranchEmployeeComponent } from '../branch/branch-employee/branch-employee.component';
import { AddbranchComponent } from './addbranch/addbranch.component';
import { CashmasterComponent } from './cashmaster/cashmaster.component';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'supplierprofile', pathMatch: 'full',
    component: OwnerComponent,
    children: [
      {
        path: 'session',
        component: SessionComponent,
      },
      {
        path: 'cashmaster',
        component: CashmasterComponent,
      },
      {
        path: 'addbranch',
        component: AddbranchComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
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
          (await import('./../reports/reports.module')).ReportsModule,
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
    OwnerComponent,
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
    CashSalesSummeryComponent,
    OnlineSalesComponent,
    ExpenceComponent,
    TotalPurchaseComponent,
    BankAccountSummeryComponent,
    StockManagementComponent,
    AddbranchComponent,
    CashmasterComponent,
    SessionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
})
export class OwnerModule {}

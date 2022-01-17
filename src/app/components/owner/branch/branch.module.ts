import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from '../owner.component';
import { SupplierProfileComponent } from '../supplier-profile/supplier-profile.component';
import { CustomerProfileComponent } from '../customer-profile/customer-profile.component';
import { InvoicesComponent } from '../invoices/invoices.component';
import { PumpEmployeeComponent } from '../pump-employee/pump-employee.component';
import { BankAccountMasterComponent } from '../bank-account-master/bank-account-master.component';
import { DepositComponent } from '../transactions/deposit/deposit.component';
import { TransacionsComponent } from '../transactions/transacions.component';
import { DispenseComponent } from '../dispense/dispense.component';
import { FuelManagementComponent } from '../fuel-management/fuel-management.component';
import { UsersComponent } from '../users/users.component';
import { CompanyOwnerComponent } from '../company-owner/company-owner.component';
import { PaymentsInComponent } from '../transactions/payments-in/payments-in.component';
import { PaymentsOutComponent } from '../transactions/payments-out/payments-out.component';
import { ExpensesComponent } from '../transactions/expenses/expenses.component';
import { CloseAccountComponent } from '../close-account/close-account.component';
import { BranchManagerComponent } from '../branch-manager/branch-manager.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker/bs-datepicker.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'supplierprofile', pathMatch: 'full',
    component: OwnerComponent,
    children: [
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
          (await import('./../branch/branch.module')).BranchModule,
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
  declarations: [BranchComponent, DashboardComponent],
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
export class BranchModule {}

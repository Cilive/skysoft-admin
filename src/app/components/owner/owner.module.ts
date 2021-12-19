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
import { DepositComponent } from './deposit/deposit.component';
import { TransacionsComponent } from './transacions/transacions.component';
import { FuelRateMasterComponent } from './fuel-rate-master/fuel-rate-master.component';
import { FuelManagementComponent } from './fuel-management/fuel-management.component';
import { ReportsComponent } from './reports/reports.component';

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
        path: 'sales_Invoice',
        component: SalesInvoiceComponent,
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
        path: 'fuel',
        component: FuelManagementComponent,
      },
      {
        path: 'reports',
        loadChildren: async () =>
          (await import('./../reports/reports.module')).ReportsModule,
      },
      {
        path: '',
        redirectTo: 'supplier_Profile',
        pathMatch: 'full',
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule,
  ],
})
export class OwnerModule {}

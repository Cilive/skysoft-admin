import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './owner.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { VatFuelMasterComponent } from './vat-fuel-master/vat-fuel-master.component';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';

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
        path: 'vat_and_Fuel',
        component: VatFuelMasterComponent,
      },
      {
        path: 'sales_Invoice',
        component: SalesInvoiceComponent,
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
})
export class OwnerModule {}

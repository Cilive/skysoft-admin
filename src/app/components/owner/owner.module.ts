import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './owner.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

const routes: Routes = [

  {
    path: '',
    // redirectTo: 'supplierprofile', pathMatch: 'full',
    component: OwnerComponent,
    children: [
      {
        path: 'supplierprofile',
        component: SupplierProfileComponent,
      },
      {
        path: 'customerprofile',
        component: CustomerProfileComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [
    OwnerComponent,
    SupplierProfileComponent,
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
  ]
})
export class OwnerModule { }

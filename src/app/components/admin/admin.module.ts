import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'companyprofile',
        component: CompanyProfileComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [AdminComponent, CompanyProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
})
export class AdminModule {}

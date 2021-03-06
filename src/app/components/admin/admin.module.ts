import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'company_Profile',
        component: CompanyProfileComponent,
      },
      {
        path: '',
        redirectTo: 'company_Profile',
        pathMatch: 'full',
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
    FormsModule,
    ModalModule.forRoot(),
  ],
})
export class AdminModule {}

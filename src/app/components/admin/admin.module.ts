import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';

const routes: Routes = [
  {
    path: 'example',
    component: ExampleComponent,
  },
  {
    path: 'companyprofile',
    component: CompanyProfileComponent,
  },
  {
    path: '',
    component: AdminComponent,
  },
];
@NgModule({
  declarations: [AdminComponent, ExampleComponent, CompanyProfileComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: async () =>
      (await import('../admin/admin.module')).AdminModule,
    canActivate: [AuthGuard],
  },
  {
    path: 'owner',
    loadChildren: async () =>
      (await import('../owner/owner.module')).OwnerModule,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class AuthenticationModule {}

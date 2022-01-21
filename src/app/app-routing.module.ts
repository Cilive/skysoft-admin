import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./components/authentication/authentication.module'))
        .AuthenticationModule,
  },
  {
    path: 'ui',
    loadChildren: async () =>
      (await import('./components/ui/ui.module')).UiModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

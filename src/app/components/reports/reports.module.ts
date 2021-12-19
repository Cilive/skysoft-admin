import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { RouterModule, Routes } from '@angular/router';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
  },
  {
    path: 'authosheet',
    component: MeterReadingComponent,
  },
];

@NgModule({
  declarations: [ReportsComponent, MeterReadingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ReportsModule {}

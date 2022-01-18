import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/model/shared';
import { BranchComponent } from 'src/app/components/owner/branch/branch.component';
import { BranchModule } from 'src/app/components/owner/branch/branch.module';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private url = environment.domain;
  constructor(private http: HttpClient) {}

  branch_dashboard() {
    return this.http.get(`${this.url}/clients/c1.localhost/manager/dashboard/`);
  }
}

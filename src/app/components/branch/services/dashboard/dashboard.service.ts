import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BranchDashboardInterface } from 'src/app/model/branch-dashboard';
import { OwnerDashboardInterface } from 'src/app/model/dashboard';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private url = environment.domain;
  constructor(private http: HttpClient) {}
  branch_dashboard() {
    return this.http.get<ApiResponse<BranchDashboardInterface>>(
      `${this.url}clients/manager/dashboard/`
    );
  }
}

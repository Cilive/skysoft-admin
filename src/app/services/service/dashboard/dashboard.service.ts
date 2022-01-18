import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BranchDashboardInterface } from 'src/app/model/branch-dashboard';
import { ApiResponse } from 'src/app/model/shared';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private url = environment.domain;
  constructor(private http: HttpClient) {}

  branch_dashboard() {
    return this.http.get<ApiResponse<BranchDashboardInterface>>(
      `${this.url}clients/c1.localhost/manager/dashboard/`
    );
  }
}

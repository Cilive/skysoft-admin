import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BranchDashboardInterface } from 'src/app/model/branch-dashboard';
import { ApiResponse } from 'src/app/model/shared';
import { OwnerDashboardInterface } from 'src/app/model/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private url = environment.domain;
  constructor(private http: HttpClient) {}

  owner_dashboard() {
    return this.http.get<ApiResponse<OwnerDashboardInterface>>(
      `${this.url}clients/private/dashboard/`
    );
  }
}

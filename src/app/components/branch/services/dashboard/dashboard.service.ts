import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OwnerDashboardInterface } from 'src/app/model/dashboard';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private url = environment.domain;
  constructor(private http: HttpClient) {}
  owner_dashboard() {
    return this.http.get<ApiResponse<OwnerDashboardInterface>>(
      `${this.url}clients/c1.localhost/private/dashboard/`
    );
  }
}

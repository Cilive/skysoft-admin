import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRANCH_EMPLOYEE } from 'src/app/model/api';
import { BranchDashboardInterface } from 'src/app/model/branch-dashboard';
import { BranchEmployeeInterface } from 'src/app/model/branch-employee';
import { ApiResponse } from 'src/app/model/shared';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class branchEmployeeService {
  get_branch_employees() {
    return this.http.get<ApiResponse<BranchDashboardInterface[]>>(
      environment.domain + this.tenant + BRANCH_EMPLOYEE
    );
  }
  private url = environment.domain;
  constructor(private http: HttpClient) {}
  tenant = 'clients/c1.localhost/';
  post_branch_employee(data: BranchEmployeeInterface) {
    return this.http.post<ApiResponse<{}>>(
      environment.domain + this.tenant + BRANCH_EMPLOYEE,
      data
    );
  }

  get_branch_employee() {
    return this.http.get;
  }

  update_branch_employee(data) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + this.tenant + BRANCH_EMPLOYEE,

      data
    );
  }

  delete_branch_employee(id) {
    return this.http.delete<ApiResponse<BranchDashboardInterface[]>>(
      environment.domain + this.tenant + BRANCH_EMPLOYEE + id
    );
  }
}

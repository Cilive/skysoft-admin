import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branchmanager } from 'src/app/components/owner/branch-manager/branch-manager.model';
import { Branch } from 'src/app/components/owner/pump-employee/pump-employee.model';
import { BRANCH_MANAGER } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BranchManagerService {
  get_pump_employees() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  post_branch_manager(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_MANAGER,
      data
    );
  }

  get_branch_manager() {
    return this.http.get<ApiResponse<Branchmanager[]>>(
      environment.domain + BRANCH_MANAGER
    );
  }
  update_branch_manager(data: Branchmanager, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_MANAGER + id + '/',
      data
    );
  }
  delete_branch_manager(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_MANAGER + id + '/'
    );
  }
  suspend_branch_manager(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/ BRANCH_MANAGER_suspend' + '/' + id + '/',
      {}
    );
  }
  get_branches() {
    return this.http.get<ApiResponse<Branch[]>>(
      environment.domain + 'administrator/branches/'
    );
  }
}

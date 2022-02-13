import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { BranchCashmaster } from '../../components/cashmaster/cashmaster.modal';
import { Owner } from '../../components/company-owner/company-owner.modal';
import { BRANCH_CASHMASTER } from 'src/app/model/api';

@Injectable({
  providedIn: 'root',
})
export class CashmasterService {
  get_branches: any;
  constructor(private http: HttpClient) {}

  post_branch_cashmaster(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{ any }>>(
      environment.domain + BRANCH_CASHMASTER,
      data
    );
  }

  get_branch_cashmaster() {
    return this.http.get<ApiResponse<BranchCashmaster[]>>(
      environment.domain + BRANCH_CASHMASTER
    );
  }
  update_branch_cashmaster(data, id) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_CASHMASTER + id + '/',
      data
    );
  }
  delete_branch_cashmaster(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_CASHMASTER + id + '/'
    );
  }
  suspend_branch_cashmaster(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'branch/Owner_suspend' + '/' + id + '/',
      {}
    );
  }
  // get_Cashmaster(id) {
  //   return this.http.get<ApiResponse<Owner[]>>(
  //     environment.domain + 'clients/c1.localhost/manager/cashmaster/' + id + '/'
  //   );
  // }
}

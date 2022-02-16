import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Branch } from 'src/app/components/branch/branch.modal';
import { Owner } from '../../components/company-owner/company-owner.modal';
import { BRANCH_OWNER } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OwnersService {
  constructor(private http: HttpClient) {}

  post_owner(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_OWNER,
      data
    );
  }

  get_owners() {
    return this.http.get<ApiResponse<[]>>(environment.domain + BRANCH_OWNER);
  }
  update_owner(data: Owner, id: number) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_OWNER + id + '/',
      data
    );
  }
  delete_owner(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_OWNER + id + '/'
    );
  }
  // suspend_owner(id) {
  //   return this.http.put<ApiResponse<any>>(
  //     environment.domain + 'owner/customer_suspend' + '/' + id + '/',
  //     {}
  //   );
  // }
  // get_branches(id) {
  //   return this.http.get<ApiResponse<Branch[]>>(
  //     environment.domain + 'clients/c1.localhost/manager/owner/' + id + '/'
  //   );
  // }
}

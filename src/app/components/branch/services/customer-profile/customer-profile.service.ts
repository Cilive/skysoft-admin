import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/components/admin/company-profile/company-profile.model';
import { CustomerProfile } from '../../components/customer-profile/customer-profile.modal';
import { CREATE_COMPANY, BRANCH_CUSTOMER } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerProfileService {
  constructor(private http: HttpClient) {}

  post_customer_profile(data: CustomerProfile) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_CUSTOMER,
      data
    );
  }

  get_customer_profiles() {
    return this.http.get<ApiResponse<CustomerProfile[]>>(
      environment.domain + BRANCH_CUSTOMER
    );
  }
  update_customer_profile(data: CustomerProfile, id) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_CUSTOMER + id + '/',
      data
    );
  }
  delete_customer_profile(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_CUSTOMER + id + '/'
    );
  }
  suspend_customer_profile(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/customer_suspend' + '/' + id + '/',
      {}
    );
  }
  get_branchwaisecustomer(id) {
    return this.http.get<ApiResponse<CustomerProfile[]>>(
      environment.domain + 'clients/c1.localhost/manager/branch_customers/'
    );
  }

  // get_custemer_profile() {
  //   return this.http.get<ApiResponse<any[]>>(
  //     environment.domain + 'clients/c1.localhost/manager/customer/'
  //   );
  // }
}

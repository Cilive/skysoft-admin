import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/components/admin/company-profile/company-profile.model';
import { CustomerProfile } from 'src/app/components/owner/customer-profile/customer-profile.modal';
import { CREATE_COMPANY, CUSTOMER } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerProfileService {
  constructor(private http: HttpClient) {}

  post_customer_profile(data: CustomerProfile) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(environment.domain + CUSTOMER, data);
  }

  get_customer_profiles() {
    return this.http.get<ApiResponse<CustomerProfile[]>>(
      environment.domain + CUSTOMER
    );
  }
  update_customer_profile(data: CustomerProfile, id) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + CUSTOMER + id + '/',
      data
    );
  }
  delete_customer_profile(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + CUSTOMER + id + '/'
    );
  }
  suspend_customer_profile(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/customer_suspend' + '/' + id + '/',
      {}
    );
  }

  get_branchwaisecustomer(id) {
    return this.http.post<ApiResponse<CustomerProfile[]>>(
      `${environment.domain}clients/c1.localhost/private/branch_customers`,
      {},
      {
        params: {
          branches: id,
        },
      }
    );
  }
}
